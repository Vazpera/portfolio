let story_list = $(".story-label");
let story_container = $("#story_viewer");
let stories = [
    {
        story: `
        The crackling of a roaring fire crackled amongst fallen wood and exposed drywall. The wailing of a child too young to feel guilt suddenly silence by a melevolent hand. One which was not scared by the actions it had prior made
        <br><br>White walls, the constant hum of fluorescent lights. A boy sat in the middle of the room, mouth bound with white cloth thin enough to breathe through. His wrists hang limp at his sides. His wrists were red with the marks of shackles that were one size too small. He liked to be about size, seven maybe? His pupils had gone red, his hair tattered and oily. His mouth was bent in a constant frown. He looked malnourished, his ribs shown even through his white jumpsuit.
        <br><br>A white padded walled room, the same hum of fluorescent lights, a teenage boy sat in the middle. His smile was wide. His eyes sat on his head unnaturally. They were wide with insanity. The room echoed with a soft laughter, the lights seemed to flicker as he did so. The jump suit he wore was two sizes too small. His malnourished body has become stunted. He sat there, unmoving, cackling.
        <br><br>Red lights blinked wildly, a siren blared, the boy stood in a common room. The same white walls covered his surroundings, however. The wails echoed from the distant halls, the wails, they seemed familiar to this boy. He was suddenly thrust into that room. The walls were set ablaze by a fire he started. The dripping, blood he spilled. The wails, his.
        <br><br>Eyes, so many eyes. They all stared at him, at the baby, the boy, the teenager that sat before them. It was pitch black, the only thing visible was the being, and the eyes. They shifted from looking at him, to looking with him. The boy was now standing, a wide, toothy grin across his face.
        `,
        title: "Eyes",
    },
    {
        title: "Jigsaw",
        story: `
        He awoke to his forehead hitting the ceiling, his hands on either side of the room, sections of his arms and legs scattered around. His neck was detached from his head, but he could breathe just fine. He closed his eyes again and imagined a string coming taut. His strewn limbs came into alignment quickly, and fused together, his body whole again.
    <br><br>A nightmare. He saw his son being taken by those horrid criminals, The Amon Institute. The case of who did it was closed, of course. But where his son was now was unknown. That unknown fact was what plagued Broch for his entire life after his son was taken. He hoped his son was okay, at least.
    <br><br>He shifted in bed, waving his hand to the side, his arm fracturing, reaching for the light switch. Once the light was on, Broch brought his arm back. He bent forward, looking at his hands. He got up, walking to the kitchen. He went to the sink and made himself a glass of water, dumping it on his head instead of drinking it.
    <br><br>He walked to the adjacent bathroom, staring himself in the eyes through the mirror. His blue eyes and black hair. His white sleep-shirt was ruffled with the intensity of this night's fit of dream horrors. He knew his son was alive. He knew it. But as he kept thinking about finding his son, his body came apart again, his head not moving, his limbs separating, finding the right positions.
    <br><br>He raised a hand up to his vision, finding it easier than it would've been if he was whole. He turned it over, and over, and over. There was no limit to his range of motion. He imagined the string tightening again, making him whole.
    <br><br>He walked out of the bathroom, the darkness of the hallway swallowing his sullen eyes again. As he reached his bedroom, his eyes were drawn towards the window. In the darkness he could see a demi-human. Red eyes, black hair. But that face, it was familiar, odd.
    <br><br>His eyes burst wide, his pupils dilating to take in the low amount of light. His voice was cracked at the first word. "Nero?" He asked aloud, and the red eyes widened. "Son?" he asked, stepping forward, his body struggling to keep whole.
    <br><br>The red eyed boy stepped back, cautious. Broch Wilder took a step forward. But there came a whistle from his lips, one that echoed in the poor boy's mind. The whistle.. it was familiar somehow. The boy was pulled back to the day he was taken, sixteen years ago. His voice ethereal, the boy spoke. "Dad?"`,
    },
    {
        title: "Underground",
        story: `
        A man covered in a robe walked through the streets of the city of Thrive, a city on the eastern side of the United Commonwealth, a prosperous country in North America. The man, however, was not prosperous. He was poor, in fact.
        <br><br>As this man walked along, glimpses of glowing red lines seeped out of his attempt at concealing them. His face was lined with them, his ashen, dark face. His stone-cold yet fiery-hot eyes peered out amongst the crowd, inspecting them.
        <br><br>Walking past him was a person, around his height. All he could make out was a pair of black, rectangular-rimmed glasses, nothing else. What a strange occurrence, he thought.
        <br><br>The next couple of minutes passed by unperturbed. No inordinate events struck this man. He came to a door in a conspicuous alley. He descended the staircase which lay concealed behind the door. He came into a large arena.
        <br><br>Tens of leering eyes stared daggers into the man, before he let his robe fall, his bright silver hair shining against the incandescent, ancient lights of the undergound arena. The poeple, upon seeing this man, Sylvester, began to cheer. The red lines that covered his ody shone bright against his dark skin, his silver hair giving the audience the illusion that he had experience.`,
    },
];
console.log(story_list);
for (let i = 0; i < story_list.length; i++) {
    $(story_list[i]).click(function (e) {
        e.preventDefault();
        console.log(i);
        $("#viewer").html(`
            <h1 id="title">${stories[i].title}</h1>
            <p id="story">${stories[i].story}</p>  
        `);
    });
}
