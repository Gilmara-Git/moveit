export function ExperienceBar() {
 //colocamos estilo na div aqui, porque podemos mante-lo como uma variavel no JS. ESte valor mudara
    return (
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className="current-experience" style={{ left:'50%' }}>
                    300px
                </span>
                
            </div>
            <span>600xp</span>
        </header>
    );
}