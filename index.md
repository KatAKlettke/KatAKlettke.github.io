---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

| :------------: + :----------: + :-------------: |
| Kat's projects | Our Projects | Joon's projects |
|----------------+--------------+-----------------|
|{% for project in site.projects %}<a href="{{ project.url }}">{{ project.name }}</a>{% endfor %}| TBA | TBA |
|----------------|--------------|-----------------|
