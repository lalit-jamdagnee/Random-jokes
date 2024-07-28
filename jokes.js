let Jokes = [`What's the best thing about Switzerland? The flag is a big plus.`,
`I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place.`,
`I found a lion in my closet the other day! When I asked what it was doing there, it said “Narnia business.”`,
`What's a cat's favorite instrument? Purr-cussion.`,
`What do you call a happy cowboy? A jolly rancher.`,
`What subject do cats like best in school? Hiss-tory.`,
`Humpty Dumpty had a great fall. He said his summer was pretty good too.`,
`My boss said “dress for the job you want, not for the job you have.” So I went in as Batman.`,
`How do you make holy water? You boil the hell out of it.`,
`Justice is a dish best served cold. Otherwise, it's just water.`,
`Why should you never throw grandpa's false teeth at a vehicle? You might denture car.`,
`Why are Christmas trees bad at knitting? They always drop their needles.`,
`What did the lunch box say to the refrigerator? Don't hate me because I'm a little cooler.`,
`I can always tell when someone is lying. I can tell when they're standing too.`,
`Some people pick their nose, but I was born with mine.`,
`I used to be afraid of speed bumps. I'm trying to get over it.`,
`If your house is cold, just stand in the corner. It’s always 90 degrees there.`,
`I don't recommend entering a wormhole. You might get stuck in the apple.`,
`The owner of the tuxedo store kept hovering over me when i was browsing, so I asked him to leave me alone. He said, “Fine, suit yourself.”`,
`Why did the egg have a day off? Because it was Fryday.`,
`Have you ever heard about the kidnapping at school? It's okay, he woke up.`,
`I found a book called How to Solve 50% of Your Problems. So I bought 2.`,
`What do Keanu Reeves and baby Yoda have in common? They age at the same rate.`,
`Why did the coffee taste like dirt? Because it was ground just a few minutes ago.`,
`Why can't you make a dinosaur omelet? Because they're egg-stinct.`,
`Why do quarterbacks tell obvious jokes? So they don't go over their receivers' heads.`,
`Why did the Rolling Stones stop making music? Because they got to bottom of the hill.`,
`How many goats does it take to change a lightbulb? Just one, but you have to goat them into it.`,
`What did one cupcake say to the other? You ain't see muffin yet.`,
`What is the best present? Broken drums! You can't beat them.`,
`Did you hear about the new squirrel diet? It's just nuts.`,
`I made song about tortilla once, now it's more like a wrap.`,
`Did you hear about the spatula's hot new flame? It met the grill of its dreams.`,
`Did you know corduroy pillows are in style? They're making headlines.`,
`What does a nosey pepper do? It gets jalapeño business.`,
`Did you hear about the fragile myth? It was busted.`,
`Did you hear about the pirate who became a great chef? He mastered the seven sea-sonings.`,
`What word can you make shorter by adding two letters? Short.`,
`When does a hippo have a tusk? After some rhino-plasty.`,
`What do call a criminal landing an airplane? Condescending.`,
`I decided to sell my vacuum cleaner. It was just gathering dust.`,
`I stayed up all night wondering where the sun went, and then it dawned on me.`,
`Why do people who live in Greece hate waking up at dawn? Because Dawn is tough on Greece.`,
`What falls, but never needs a bandage? The rain.`,
`I was going to tell you a joke about boxing but I forgot the punch line.`,
`I'm not a fan of spring cleaning. Let's be honest, I'm not into summer, fall, or winter cleaning either.`,
`Why did the egg hide? It was a little chicken.`,
`Why couldn't the sunflower ride its bike? It lost its petals.`,
`What's an egg's favorite vacation spot? New Yolk City.`,
`I ate a sock yesterday. It was very time-consuming.`,
`What kind of candy do astronauts like? Mars bars.`,
`I wanted to buy some camo pants but couldn't find any.`,
`I ordered a chicken and an egg from Amazon. I'll let you know.`,
`What month is the shortest of the year? May, it only has three letters.`,
`I was going to tell a time traveling joke, but you guys didn't like it.`,
`What do you call a lazy kangaroo? A pouch potato.`,
`I used to run a dating service for chickens, but I was struggling to make hens meet.`,
`Why do we tell actors to "break a leg?" Because every play has a cast.`,
`What does a pig put on dry skin? Oinkment.`,
`What do you call it when a snowman throws a tantrum? A meltdown.`,
`My uncle named his dogs Timex and Rolex. They're his watch dogs.`,
`Did you hear about the guy whose left side was cut off? He's all right now.`,
`How do you open a banana? With a mon-key.`,
`Which is faster, hot or cold? Hot, because you can catch cold.`,
`What did one plate say to the other plate? Dinner's on me.`,
`Why do oranges wear sunscreen? So they don't peel.`,
`My wife told me to stop acting like a flamingo, so I had to put my foot down.`,
`What do you call a pig that does karate? A pork chop.`,
`Where does Batman go to the bathroom? The batroom.`,
`What do you call a pony with a sore throat? A little horse.`,
`What did the left eye say to the right eye? Between you and me, something smells.`,
`Why didn't the melons get married? Because they cantaloupe.`,
`What do you call a fake noodle? An impasta.`,
`How did the pig get to the hogspital? In a hambulance.`,
`Why does Humpty Dumpty love autumn? Because he had a great fall.`,
`What happens when a strawberry gets run over crossing the street? Traffic jam.`,
`Why did the cow jump over the moon? The farmer had cold hands.`,
`How does an octopus go into battle? Well-armed.`,
`What do you call a pudgy psychic? A four-chin teller.`,
`What do you get when you mix a cocker spaniel, a poodle, and a ghost? A cocker-poodle boo.`,
`How do celebrities stay cool? They have many fans.`,
`How much money does a pirate pay for corn? A buccaneer.`,
`Where do young trees go to learn? Elementree school.`,
`Why do bees have sticky hair? Because they use a honeycomb.`,
`How did the student feel when he learned about electricity? Totally shocked.`,
`What do you call a bee that can't make up its mind? A Maybe.`,
`Why was six afraid of seven? Because 7-8-9.`,
`If April showers bring May flowers, what do May flowers bring? Pilgrims.`,
`I tried to catch fog yesterday. Mist.`,
`What do you call a hippie's wife? Mississippi.`,
`Two peanuts were walking down the street. One was a-salted.`,
`How can you tell it’s a dogwood tree? By the bark.`,
`What did the buffalo say when his kid went to college? Bison.`,
`What did the mayonnaise say when the refrigerator door was opened? Close the door, I'm dressing.`,
`What's the stinkiest planet? Poopiter.`];

let num = Math.floor(Math.random()*95);

let container = document.getElementById('joke');

container.innerHTML = Jokes[num];

let a = document.createElement('button')
a.textContent = 'Click to refresh';
a.setAttribute('id','refresh');

document.getElementsByClassName('jokes')[0].appendChild(a);

//To add hover affect hover affect on the refresh button
let btn = document.getElementById('refresh');

function over(){
    btn.style.color = 'green';
    btn.style.opacity = 1;
    btn.style.fontSize = "15px";
}
function left(){
    btn.style.color = 'white';
    btn.style.opacity = 0.5;
    btn.style.fontSize = "14px";
}
let x = function(e){
    location.reload(true);
}
btn.addEventListener('mouseover', over);
btn.addEventListener('mouseout', left)
btn.addEventListener('click', x)
