# Eduardo Verdeja - Fullstack web engineer

This is the repo for my first web resume! You can find the live site [here](https://eduardo-verdeja.surge-sh)

This project is based of the [Gatsby Universal Starter](https://github.com/fabe/gatsby-universal). It also uses [html2canvas](https://html2canvas.hertzen.com/) and [jsPDF](https://github.com/MrRio/jsPDF) to generate a PDF resume from markdown content rendered by Gatsby and React.

Please send me a message if you have any questions and/or suggestions!

# Roadmap

- Learn about CircleCI and use it for the first time in this project
- Add tools & techs (with logos) + Expertise/Time
    - Similar to what Ângelo Ocanã did with his resume! https://angeloocana.com/pt/resume/
- Add a 'Jobs & Education' page with a timeline component
    - https://github.com/stephane-monnot/react-vertical-timeline
- Add multilanguage support for Portuguese
    - https://www.npmjs.com/package/gatsby-plugin-i18n
- Add a posts page so I can start writing and get a blog up and running. I *need* multilanguage support up and running for this the work I want it to work 🌎 !

# Usage

```
# Installation with `gatsby-cli`
gatsby new my-own-resume https://github.com/eaverdeja/eduardo-verdeja-resume

# Installation with `git clone`
git clone my-own-resume git@github.com:eaverdeja/eduardo-verdeja-resume.git
cd my-own-resume
npm install

# To develop
npm run develop

# To build
npm run build

# To deploy with surge
# Change the CNAME file contents for your custom.surge.sh address
cp CNAME public/
surge -p public/
```

For further details you can check out the original [gatsby universal starter](https://github.com/fabe/gatsby-universal) project. I'm still playing around with the project structure and features, so copypasta from the original readme won't work 😁
