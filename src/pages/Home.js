import React from 'react';
import SkillsHero from '../components/SkillsHero';
import pc from '../assets/images/pc.jpg';
import { useDocumentTitle } from '../helpers/useDocumentTitle';

function Home() {
    useDocumentTitle("Home - Adam Johnson");

    const skills = [
        { name: "Azure", weight: 6 },
        { name: "AWS", weight: 6 },

        { name: "React", weight: 5 },
        { name: ".NET", weight: 5 },

        { name: "C#", weight: 5 },
        { name: "SQL", weight: 5 },
        { name: "Typescript", weight: 5 },

        { name: "C++", weight: 4 },
        { name: "C", weight: 4 },

        { name: "WPF", weight: 3 },
        { name: "WCF", weight: 3 },
        { name: "Blazor", weight: 3 },

        { name: "REST APIs", weight: 1 },
        { name: "GraphQL", weight: 1 },
        { name: "Web Apps", weight: 1 },
        { name: "Azure Functions", weight: 1 },
        { name: "RabbitMQ", weight: 1 },
        { name: "CosmosDB", weight: 2 },
        { name: "SignalR", weight: 2 },
        { name: "Redis", weight: 2 },
        { name: "Git", weight: 1 },
        { name: "SVN", weight: 1 },
        { name: "xUnit", weight: 1 },
    ];

    const divStyle = {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${pc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className="flex-1 flex flex-col" style={divStyle}>
            <SkillsHero skills={skills} />
        </div>
    );
}

export default Home;
