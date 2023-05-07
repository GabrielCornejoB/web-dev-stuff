<h1 align="center" style="font-weight: 500">
  <br>
  <img src="./public/logo.png" width="200" alt="WebDevStuff">
  <br>
  Web Dev Stuff
  <br>
</h1>

<h4 align="center">A collection of websites, libraries, tools & more, for making web development easier, faster and more fun.</h4>

<br>

<h4 align="center" style="font-weight: 500">
Developed with
</h4>
<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white">
</div>

<br>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#installation">Installation</a> •
  <a href="#main-challenges">Main Challenges</a>
</p>

![demo](./webdevstuff.gif)

## **Key Features**

- Data fetching.
- Parametrized Queries.
  - Filtering by Category.
  - Searching by Name.
- Global & local state.
- Caching.
- Loading skeletons.
- Color theme switcher.
  - All of the backgrounds colors and font colors used are whites with different opacities, so every background you put should look good.
- Responsive design.
  - The site is responsive, but realistically it is meant to be used in a desktop.
- Optimized images.

Apart of that, during all of the development, I tried to use best practices following some of the **SOLID** design principales, **DRY** (Don't Repeat Yourself), **feature-based** folder structure and **clean code** practices.

## **How to Use**

[Visit this link](https://web-dev-stuff.vercel.app/) to access Web Dev Stuff and just enjoy!

- **Left click** (normal click) on a card to open the site on a new tab.
- **Right click** on a card to see more details about the resource.
- In the left side you can **filter by categories**.
- On the top center you can **search a resource by name**.
- On the top left, click on the logo and you'll **reset the filters**.
- On the top right you can **toggle themes**.

## **Installation**

If you want to use it locally first you should create a Supabase project and use your own data. Then type the following commands using your command line:

      # Clone this repository
      $ git clone https://github.com/GabrielCornejoB/web-dev-stuff

      # Navigate to directory
      $ cd web-dev-stuff

      # Install required dependencies
      $ npm install

      # Run the app
      $ npm run dev

> **Note**
> I suggest just using the hosted version, [visit this link](https://web-dev-stuff.vercel.app/) to check it out.

## **Main Challenges**

The creation of this project was way more than only coding, it had a lot of pre-work, i'll explain the process in a series of phases:

- **Design phase:** The [Figma design](https://www.figma.com/file/3VRAIFRokJz85VGeRRhsUV/WebDevStuff?type=design&node-id=0%3A1&t=B9mmnKcbgjL98w2n-1) had a lot of versions before getting to one I liked. And at first I used different tones of purple instead of using whites with different opacities.

- **Research phase:**: I knew some websites of the ones included in the final version, but I had to look for a TON more so the page had some content. This process took me a lot, I had to try every website, check if it was free, easy to use, and more...

- **Image optimization phase**: Yes, I will make this a phase by itself, this site has a lot of images, it is like a crucial part of the site, so they had to be optimized. First I had to crop ALL of the images to a 1:1 scale, then, I re-scaled them to 150x150px and lastly, I converted them to .webp. This took a lot of time, a lot, I am traumatized. Next time I should make a local application for making this easier.

- **Filling the database**: As of today, Web Dev Stuff has around 60-70 resources, every single one of this had to be created manually on the database. I know I could create a page for adding new entries buuuuut, that would involve auth, and more stuff so I stuck with filling the database directly on supabase.

- **Development phase**: I think it was the easiest of them all, I feel comfortable using the tools that I chose, but I think the main challenge of this phase was trying to use the best practices, bc I like to be WAY more organized than I should, so I tried to program the best I could. Still, I know a lot of things can improve, and I am open to feedback :D. Responsive design was a bit tough too.

And I think that's it, it was a fun experience, everything took around 10 days, I learned a lot and I feel proud of the end result. As I said earlier, I'm open to feedback, thanks a lot if you read until this point.
