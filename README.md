# honkit-plugin-shiki

[Honkit](https://github.com/honkit/honkit) plugin for [Shiki](https://github.com/shikijs/shiki) code highlighting

## Install

```bash
npm add -D honkit-plugin-shiki
```

## Configuration

Select your Shiki theme inside `book.json`:

```json
{
  "title": "My Book",
  "description": "Best book ever",
  "author": "Michael Hoffmann",
  "plugins": ["honkit-plugin-shiki"],
  "pluginsConfig": {
    "shiki": {
      "theme": "nord"
    }
  }
}
```
