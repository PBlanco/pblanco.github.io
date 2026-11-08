const { chromium } = require('playwright');
const fs = require('fs');
const out = '/workspace/peterblanco-qa';
const sizes = [{width:360,height:800},{width:390,height:844},{width:768,height:1024},{width:1440,height:900}];
(async () => {
  const browser = await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
  const results = {commit:'27b4b086132b0a3184872e4c01d64f93e98d25c4',browser:browser.version(),viewports:[],routes:[]};
  for (const viewport of sizes) {
    const page = await browser.newPage({viewport});
    const errors=[]; page.on('pageerror', e=>errors.push(e.message));
    await page.goto('http://127.0.0.1:8000/');
    await page.evaluate(()=>Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))));
    const measurements=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),links:[...document.querySelectorAll('main a')].map(a=>({text:a.textContent.trim(),href:a.href}))}));
    if(measurements.overflow||measurements.brokenImages.length)throw Error('Layout/image failure');
    await page.screenshot({path:`${out}/after-${viewport.width}.png`,fullPage:true});
    await page.getByRole('link',{name:'Interests',exact:true}).click();
    await page.waitForURL('**/interests.html');
    if(!await page.getByRole('heading',{name:'Active',exact:true}).isVisible())throw Error('Interests navigation failed');
    await page.screenshot({path:`${out}/interests-${viewport.width}.png`,fullPage:true});
    await page.getByRole('link',{name:'Home',exact:true}).click();
    await page.waitForURL('http://127.0.0.1:8000/');
    const text=await page.locator('main').innerText();
    if(!text.includes('Product manager at Coast.')||/Open to|Previously|Consulting|Trailway|Stevens|ThirdSpace/.test(text))throw Error('Positioning mismatch');
    results.viewports.push({viewport,...measurements,navigation:'Home → Interests → Home passed',pageErrors:errors});
    if(errors.length)throw Error('Page JavaScript error');
    if([390,1440].includes(viewport.width)){
      await page.goto('http://127.0.0.1:8001/');
      await page.evaluate(()=>Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))));
      await page.screenshot({path:`${out}/before-${viewport.width}.png`,fullPage:true});
    }
    await page.close();
  }
  const page=await browser.newPage();
  for(const path of ['/blog.html','/startups.html','/travel-guides.html','/startup/why-i-shut-down-trailway/','/startup/thirdspaces-we-found-a-problem-but-no-business/','/startup/quiet-crisis-in-qa-more-code-same-old-problems/','/cheap-blogging-with-jekyll/','/travel-guides/acadia-travel-guide/','/travel-guides/argentina-travel-guide/','/AGENTS.md','/README.md','/conductor.json']){
    const response=await page.request.get('http://127.0.0.1:8000'+path);
    results.routes.push({path,status:response.status()});
    if(response.status()!==404)throw Error('Removed page accessible: '+path);
  }
  for(const path of ['/sitemap.xml','/feed.xml']){
    const response=await page.request.get('http://127.0.0.1:8000'+path);
    if(/argentina-travel-guide|acadia-travel-guide|why-i-shut-down-trailway|thirdspaces-we-found|quiet-crisis-in-qa|cheap-blogging-with-jekyll/.test(await response.text()))throw Error('Removed content discovered');
  }
  await page.close();
  for(const viewport of [sizes[1],sizes[3]]){
    const context=await browser.newContext({viewport,recordVideo:{dir:out,size:viewport}});
    const page=await context.newPage();const video=page.video();
    await page.goto('http://127.0.0.1:8000/');await page.waitForTimeout(1400);
    await page.mouse.move(viewport.width/2,viewport.height/2);
    await page.mouse.wheel(0,400);await page.waitForTimeout(1000);
    await page.mouse.wheel(0,-800);await page.waitForTimeout(800);
    await page.getByRole('link',{name:'Interests',exact:true}).click();await page.waitForTimeout(1400);
    await page.mouse.wheel(0,350);await page.waitForTimeout(800);
    await page.getByRole('link',{name:'Home',exact:true}).click();await page.waitForTimeout(1200);
    await context.close();await video.saveAs(`${out}/walkthrough-${viewport.width}.webm`);
    fs.unlinkSync(await video.path());
  }
  fs.writeFileSync(`${out}/results.json`,JSON.stringify(results,null,2));
  console.log(JSON.stringify(results,null,2));
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
