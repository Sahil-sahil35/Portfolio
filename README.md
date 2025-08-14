# Dynamic Portfolio Website

This is your dynamic portfolio website that automatically updates when you edit the data file. No more manually editing HTML code!

## How It Works

Your website consists of 4 main files:

1. **`index.html`** - The main website structure (you rarely need to touch this)
2. **`data.json`** - Your content data (this is what you'll edit most often)
3. **`app.js`** - The JavaScript that connects everything (no need to edit)
4. **`assets/`** - Folder for your images

## Quick Start

1. **Edit your content**: Open `data.json` in any text editor
2. **Add your images**: Put your photos in the `assets/` folder
3. **Test locally**: Open `index.html` in your web browser
4. **Deploy**: Upload to GitHub Pages, Netlify, or any web hosting service

## Editing Your Data

### Personal Information

```json
"personalInfo": {
  "name": "Your Name",
  "logoInitial": "Y",
  "jobTitle1": "Your Primary Title",
  "jobTitle2": "Your Secondary Title",
  "description": "Your description here...",
  "heroImage": "./assets/your-photo.jpg",
  "contact": {
    "email": "your@email.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, State"
  }
}
```

**What you can change:**
- `name`: Your full name (appears in hero and footer)
- `logoInitial`: Single letter for the logo (usually first letter of your name)
- `jobTitle1` & `jobTitle2`: Your professional titles
- `description`: The paragraph describing what you do
- `heroImage`: Path to your profile photo (put the photo in `assets/` folder)
- `contact`: Your email, phone, and location

### Statistics

```json
"stats": [
  { "label": "Years Experience", "value": "14" },
  { "label": "Projects", "value": "50+" },
  { "label": "Happy Clients", "value": "1.5K" },
  { "label": "Awards", "value": "14" }
]
```

**How to edit:**
- Change the `value` to your numbers
- Change the `label` to describe what the number represents
- Add more stats by copying the pattern: `{ "label": "New Stat", "value": "123" }`

### Services

```json
"services": [
  {
    "id": "01",
    "title": "Service Name",
    "description": "What this service includes..."
  }
]
```

**How to add/edit services:**
- Change `title` and `description` for existing services
- To add a new service, copy the entire block and change `id` to "05", "06", etc.
- To remove a service, delete the entire block (including the comma)

### Portfolio Works

```json
"works": [
  {
    "title": "Project Name",
    "category": "Web",
    "image": "./assets/project-image.jpg",
    "link": "https://project-url.com"
  }
]
```

**How to add/edit works:**
- `title`: Name of your project
- `category`: Type of project (Web, App, 3D, etc.)
- `image`: Path to project screenshot (put image in `assets/` folder)
- `link`: URL to the live project or "#" if no link

### Experience & Education

```json
"experience": [
  { "role": "Job Title", "period": "2023–Now · Company Name" }
],
"education": [
  { "course": "Course Name", "period": "2020 · School Name" }
]
```

**How to edit:**
- Change `role`/`course` and `period` to match your background
- Add new entries by copying the pattern
- Remove entries by deleting the line

### Skills

```json
"skills": [
  "Skill 1", "Skill 2", "Skill 3"
]
```

**How to edit:**
- Replace with your actual skills
- Add more skills by adding them to the list: `"New Skill"`
- Remove skills by deleting them from the list

### Testimonials

```json
"testimonials": [
  {
    "quote": "What the client said about you...",
    "author": "Client Name",
    "company": "Their Title, Company"
  }
]
```

### Blog Articles

```json
"blog": [
  {
    "title": "Article Title",
    "description": "Brief description of the article...",
    "image": "./assets/blog-image.jpg",
    "link": "https://article-url.com"
  }
]
```

## Adding Images

1. **Create the assets folder** (if it doesn't exist): Create a folder named `assets` in the same location as your HTML file
2. **Add your images**: Copy your photos/screenshots into the `assets` folder
3. **Name them clearly**: Use descriptive names like `profile-photo.jpg`, `project-ecommerce.png`, etc.
4. **Update the data.json**: Change the image paths to match your files:
   - `"./assets/your-filename.jpg"`
   - Always start with `"./assets/"`

## Testing Your Changes

1. **Save your changes** to `data.json`
2. **Open `index.html`** in your web browser (double-click the file)
3. **Refresh the page** to see your updates
4. **Check for errors**: If something doesn't work, check the browser console (F12 → Console tab)

## Common Issues & Solutions

### Images Not Showing
- **Problem**: Image paths are wrong
- **Solution**: Make sure images are in the `assets/` folder and paths start with `"./assets/"`

### Content Not Updating
- **Problem**: JSON syntax error
- **Solution**: Check for missing commas, quotes, or brackets. Use a JSON validator online.

### Website Looks Broken
- **Problem**: Missing comma or bracket in JSON
- **Solution**: Each item in a list needs a comma except the last one

## JSON Syntax Rules

- **Strings** (text) must be in quotes: `"like this"`
- **Numbers** can be with or without quotes: `"14"` or `14`
- **Lists** are separated by commas: `["item1", "item2", "item3"]`
- **Objects** have key-value pairs: `{"key": "value"}`
- **Last item** in a list should NOT have a comma after it

## Deployment Options

### GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository
3. Upload your files
4. Enable GitHub Pages in repository settings

### Netlify (Free)
1. Create a Netlify account
2. Drag and drop your folder to Netlify
3. Get instant live URL

### Other Options
- Vercel
- Firebase Hosting
- Any web hosting service

## Need Help?

If you run into issues:
1. **Check the browser console** (F12 → Console) for error messages
2. **Validate your JSON** using an online JSON validator
3. **Compare with the original** `data.json` to see the correct format
4. **Start small** - make one change at a time and test

Remember: The beauty of this system is that you only need to edit the `data.json` file to update your entire website!

