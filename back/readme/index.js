const { prompt } = require('enquirer');
const fs = require('fs');
const path = require('path');
const { generateDarkReadme } = require('./templates/dark.js');
const { generateLightReadme } = require('./templates/light.js');

async function collectUserData() {
    console.log('🚀 Welcome to the Gen-Z README Generator! Let\'s make your profile absolutely iconic ✨\n');
    
    const basicInfo = await prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name? (the main character energy)",
            initial: "John Doe",
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What\'s your GitHub username? (where the magic happens)',
            initial: 'johndoe',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email address? (for the networking bestie)',
            initial: 'account@gmail.com',
        },
        {
            type: "input",
            message: "What's your age? (just vibes, no judgment)",
            name: "age",
            initial: "20",
        },
        {
            type: "input",
            message: "Tell us about yourself in one line (your bio moment)",
            name: "bio",
            initial: "just a dev living their best life 💯",
        }
    ]);

    const styleChoice = await prompt([
        {
            type: "select",
            message: "What vibe are we going for? 🎭",
            initial: "Genz👻",
            choices: ["Genz👻", "Normal🫡", "Aesthetic😇", "Cool🤩"],
            name: "generation",
        },
        {   
            message: "Theme preference? (we're defaulting to dark mode obvs)",
            type: "select",
            choices: ["dark🌑", "light ☀️", "auto 🌈"],
            name: "theme",
        }
    ]);

    const projects = [];
    let addMore = true;
    
    console.log('\n📁 Let\'s add your projects (the receipts of your talent):');
    
    while (addMore) {
        const projectInfo = await prompt([
            {
                type: "input",
                message: "Project name:",
                name: "name",
            },
            {
                type: "input",
                message: "Project URL (GitHub/live demo):",
                name: "url",
            },
            {
                type: "input",
                message: "Brief description (what makes it special):",
                name: "description",
            },
            {
                type: "input",
                message: "Tech stack used:",
                name: "tech",
                initial: "JavaScript, HTML, CSS"
            },
            {
                type: "select",
                message: "Project status:",
                name: "status",
                choices: ["shipped ✅", "in progress 🚧", "on hold 😴", "planning 📝"]
            }
        ]);
        
        if (projectInfo.name && projectInfo.url) {
            projects.push(projectInfo);
        }
        
        const continueAdding = await prompt({
            type: "confirm",
            message: "Add another project?",
            name: "continue",
            initial: false
        });
        
        addMore = continueAdding.continue;
    }

    return {
        ...basicInfo,
        ...styleChoice,
        projects
    };
}

async function generateReadme() {
    try {
        const userData = await collectUserData();
        
        console.log('\n🎨 Generating your iconic README...');
        
        let readmeContent;
        
        // Generate based on theme preference
        if (userData.theme === "light ☀️") {
            readmeContent = generateLightReadme(userData);
        } else {
            // Default to dark theme for Gen-Z style or dark preference
            readmeContent = generateDarkReadme(userData);
        }
        
        // Write the README file
        const readmePath = path.join(process.cwd(), 'README.md');
        fs.writeFileSync(readmePath, readmeContent);
        
        console.log('✨ README.md generated successfully!');
        console.log(`📁 Location: ${readmePath}`);
        console.log('\n🔥 Your profile is about to be absolutely iconic! Time to commit and push! 💯');
        
        return userData;
        
    } catch (error) {
        console.error("❌ An error occurred:", error.message);
        throw error;
    }
}

// Run the generator
generateReadme().then((data) => {
    console.log(`\n🎉 All done, ${data.name}! Your README is ready to serve looks! ✨`);
}).catch((err) => {
    console.error("💀 Something went wrong:", err.message);
});



