function generateLightReadme(data) {
    const { name, githubUsername, email, age, projects, bio } = data;
    
    return `
<div align="center">

# ☀️ ${name} 
### *spreading positive vibes in the digital world* ✨

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=6366F1&background=FFFFFF&center=true&vCenter=true&width=435&lines=creating+with+purpose+%F0%9F%8C%9F;building+dreams+into+reality+%F0%9F%9A%80;stay+curious%2C+stay+creative+%F0%9F%A7%A0" alt="Typing SVG" />

</div>

---

## 🌟 About Me

\`\`\`typescript
const ${githubUsername.toLowerCase().replace(/[^a-z0-9]/g, '')} = {
    name: "${name}",
    age: ${age},
    status: "creating ✨",
    passions: ["coding", "learning", "building awesome things"],
    currentFocus: "making an impact 🌍",
    pronouns: "creator/innovator"
};
\`\`\`

${bio ? `> *${bio}*` : '> *a developer passionate about creating meaningful solutions* 🌟'}

---

## 💼 Tech Stack

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## 🚀 Featured Projects

${projects && projects.length > 0 ? projects.map((project, index) => `
### ${index + 1}. [${project.name || `Project ${index + 1}`}](${project.url})
${project.description || '*A project I\'m proud of* ⭐'}

**Technologies:** ${project.tech || 'JavaScript, HTML, CSS'}
**Status:** ${project.status || 'completed ✅'}

---
`).join('') : `
### 🚧 Currently Working On...
*Exciting projects coming soon* 🎯

---
`}

## 📊 GitHub Analytics

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=default&hide_border=true&bg_color=FFFFFF&title_color=6366F1&icon_color=6366F1&text_color=374151" alt="GitHub Stats" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=default&hide_border=true&background=FFFFFF&stroke=6366F1&ring=6366F1&fire=F59E0B&currStreakLabel=374151" alt="GitHub Streak" />

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=default&hide_border=true&bg_color=FFFFFF&title_color=6366F1&text_color=374151" alt="Top Languages" />

</div>

---

## 🎵 Currently Listening To

<div align="center">

[![Spotify](https://novatorem-gilt-pi.vercel.app/api/spotify)](https://open.spotify.com/user/${githubUsername})

</div>

---

## 💭 Developer Philosophy

<div align="center">

\`\`\`
function life() {
    while (learning) {
        code();
        create();
        improve();
        share();
        // continuous growth mindset 🌱
    }
}
\`\`\`

</div>

---

## 🤝 Let's Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${githubUsername})
${email ? `[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${email})` : ''}
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${githubUsername})
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/${githubUsername})

</div>

---

<div align="center">

### 🌟 *"The best way to predict the future is to create it"* 🌟

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,15,20&height=100&section=footer&text=Thanks%20for%20visiting!&fontSize=16&fontColor=6366F1&animation=fadeIn" />

</div>

---

<div align="center">

![Profile Views](https://komarev.com/ghpvc/?username=${githubUsername}&color=blue&style=for-the-badge&label=PROFILE+VIEWS)

**Last Updated:** ${new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}

</div>
`;
}

module.exports = { generateLightReadme };
