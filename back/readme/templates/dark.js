function generateDarkReadme(data) {
    const { name, githubUsername, email, age, projects, bio } = data;
    
    return `
<div align="center">

# 🌙 ${name} 
### *lowkey vibing in the digital realm* ✨

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=BB86FC&background=121212&center=true&vCenter=true&width=435&lines=no+cap%2C+just+code+%F0%9F%92%AF;building+the+future+%F0%9F%9A%80;stay+hungry%2C+stay+foolish+%F0%9F%A7%A0" alt="Typing SVG" />

</div>

---

## 💫 About Me (fr fr)

\`\`\`typescript
const ${githubUsername.toLowerCase().replace(/[^a-z0-9]/g, '')} = {
    name: "${name}",
    age: ${age},
    status: "grinding 💪",
    vibes: ["coding", "chilling", "manifesting success"],
    currentMood: "main character energy ✨",
    pronouns: "legend/iconic"
};
\`\`\`

${bio ? `> *${bio}*` : '> *just a dev who refuses to be basic* 🤷‍♀️'}

---

## 🔥 Tech Stack (what I'm serving)

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## 🚀 Projects (the receipts)

${projects && projects.length > 0 ? projects.map((project, index) => `
### ${index + 1}. [${project.name || `Project ${index + 1}`}](${project.url})
${project.description || '*this project hits different* 💯'}

**Tech:** ${project.tech || 'JavaScript, HTML, CSS'}
**Status:** ${project.status || 'shipped ✅'}

---
`).join('') : `
### 🚧 Building something iconic...
*projects coming soon bestie* 😎

---
`}

## 📊 GitHub Stats (the glow up is real)

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=BB86FC&icon_color=BB86FC&text_color=FFFFFF" alt="GitHub Stats" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true&background=0D1117&stroke=BB86FC&ring=BB86FC&fire=FF6B6B&currStreakLabel=FFFFFF" alt="GitHub Streak" />

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=BB86FC&text_color=FFFFFF" alt="Top Languages" />

</div>

---

## 🎵 Currently Vibing To

<div align="center">

[![Spotify](https://novatorem-gilt-pi.vercel.app/api/spotify)](https://open.spotify.com/user/${githubUsername})

</div>

---

## 💭 Random Developer Thoughts

<div align="center">

\`\`\`
while(alive) {
    eat();
    sleep();
    code();
    repeat();
    // no cap, this is the way 💯
}
\`\`\`

</div>

---

## 🤝 Let's Connect (slide into my DMs)

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${githubUsername})
${email ? `[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${email})` : ''}
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/${githubUsername})
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/${githubUsername})

</div>

---

<div align="center">

### ✨ *"be yourself, everyone else is taken"* ✨

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer&text=thanks%20for%20stopping%20by%20bestie&fontSize=16&fontColor=fff&animation=twinkling" />

</div>

---

<div align="center">

![Profile Views](https://komarev.com/ghpvc/?username=${githubUsername}&color=blueviolet&style=for-the-badge&label=PROFILE+VIEWS)

**Last Updated:** ${new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}

</div>
`;
}

module.exports = { generateDarkReadme };
