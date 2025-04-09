---
layout: default
title: Home
---
<span class="wave">👋</span> Hi, I'm <span style="font-weight: 600;">Peter Blanco</span>, a startup founder working on the next big thing 🚀. Stay tuned!

![Peter Blanco - Product Manager and Tech Professional](/assets/home.jpg){: width="100%" style="display: block; margin: 0 auto;"}

## Latest projects
- **March 2025**: 🔐 [SafeSend](https://github.com/PBlanco/SafeSend){:target="_blank" rel="noopener noreferrer"} - An open-source safe way to share files.
- **Feb 2025**: 📰 [HackerNews Post Formatter](https://hnpostformatter.blancotech.com/){:target="_blank" rel="noopener noreferrer"} - Format your HackerNews post with ease.
- **Jan 2025**: 🛒 [LowLow](https://lowlow.bot){:target="_blank" rel="noopener noreferrer"} - A privacy-focused price tracking app.

## Latest Posts
{% for post in site.posts limit:3 %}
- **{{ post.date | date: "%b %Y" }}**: [{{ post.title }}]({{ post.url }}){:rel="noopener noreferrer"} - {{ post.excerpt | strip_html | truncatewords: 30 }}
{% endfor %}

## Previously
1. 💡 **Senior Product Manager** at [ActionIQ](https://actioniq.com){:target="_blank" rel="noopener noreferrer"} → Led product strategy for AI, Analytics, and Data Platforms for Fortune 500 clients. Aquired by [Uniphore](https://uniphore.com){:target="_blank" rel="noopener noreferrer"}.
2. 🎥 **Software Engineer** at [SyncOnSet](https://www.synconset.com){:target="_blank" rel="noopener noreferrer"} → Built Emmy-winning software. Later acquired by [Entertainment Partners](https://www.ep.com){:target="_blank" rel="noopener noreferrer"}.
3. 🛒 **Founding team member** of [RosieApp](https://www.rosieapp.com){:target="_blank" rel="noopener noreferrer"} → Built iOS app for local grocery delivery landing first customers and winning $100k in funding. Later acquired by [Instacart](https://www.instacart.com){:target="_blank" rel="noopener noreferrer"}.

## Find me on

- [LinkedIn](https://www.linkedin.com/in/{{ site.linkedin_username }}){:target="_blank" rel="noopener noreferrer"}
- [GitHub](https://github.com/{{ site.github_username }}){:target="_blank" rel="noopener noreferrer"}
- [Twitter](https://twitter.com/{{ site.twitter_username }}){:target="_blank" rel="noopener noreferrer"}
