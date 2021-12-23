const {MessageEmbed} = require('discord.js');

const fortune = {
	GREAT: 'Great Fortune',
	GOOD: 'Good Fortune',
	MODEST: 'Modest Fortune',
	RISING: 'Rising Fortune',
	MIS: 'Misfortune',
	GREAT_MIS: 'Great Misfortune',
}

const rawFortuneSlips = [
	{
		type: fortune.GREAT,
		title: 'Rare Horsetail',
		desc: "Whenever you draw your blade, it shall lead you towards victory. The shine of your blade as it leaves its sheath will also inspire those around you. Today, a single shot from your bow will shoot down an airborne prey, and a single strike against a guard will hit their weak spot. If you have no target, try looking around. You might find a surprise waiting for you. Also, don't forget to share your good luck with your less- fortunate companions.Horsetails grow in fields of Silvergrass, but are much taller.It is a fitting symbol for you, who stands tall and proud in this world.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Item_Horsetail.png/revision/latest/scale-to-width-down/512?cb=20201209212841',
	},
	{
		type: fortune.GREAT,
		title: 'Energetic Onikabuto',
		desc: "Today, what was lost will be found. Efforts you thought were made in vain will bear fruit. A friendship you once thought broken will be mended. Something you had long forgotten will come to mind. Nothing in this world is beyond redemption. Today is the day to reclaim what was lost. The onikabuto is a peace-loving little being that avoids confrontation. May this pursuit of peace bring you great happiness.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Onikabuto.png/revision/latest/scale-to-width-down/512?cb=20210721030840',
	},
	{
		type: fortune.GREAT,
		title: 'Thriving Naku Weed',
		desc: "Today the wind will pick up, and you will succeed effortlessly in whatever you do. The people around you will be exceptionally content, and no conflicts will occur. You will dine on delicacies that you have wished for but not eaten in a long time. In your work and in your travels, everything will go smoothly. Seize the day and advance with zeal. Many people are unaware that the Naku Weed can predict thunderstorms. It seeks the gaze of the Electro Archon, growing only on the islands of Inazuma. The tingling sensation you feel when picking it is said to feel similar to good fortune.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Item_Naku_Weed.png/revision/latest/scale-to-width-down/512?cb=20210721030833',
	},
	{
		type: fortune.GREAT,
		title: 'Everburning Flaming Flower Stamen',
		desc: "The clouds disperse, revealing the moon in the sky. Whoever draws this slip will receive great fortune. With clarity in your heart, what you wish for will come true. Things will go your way today, whether there is something you wish to accomplish......or someone you wish to meet. Now is the time to act. The heat of a Flaming Flower comes from the fire in its heart. The reason everything will go your way is because your heart knows the path to take.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/9/97/Item_Flaming_Flower_Stamen.png/revision/latest/scale-to-width-down/512?cb=20210113032702',
	},
	{
		type: fortune.GOOD,
		title: 'Shining Crystal Core',
		desc: "A day like any other. A routine that the body and mind are accustomed to. An item will appear to replace something you lost, which will bring you great happiness. Relations with the acquaintances you see most frequently will improve, and some may even become the best of friends. Even the most ordinary of days can become a treasured memory. Crystalfies are tiny life-forms born of coalesced elemental energy. And the elements are blessings promised by the world to the people who inhabit it.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Crystal_Core.png/revision/latest/scale-to-width-down/512?cb=20201202043232',
	},
	{
		type: fortune.GOOD,
		title: 'Rising Bamboo Shoot',
		desc: "Spring has come to the withered tree, and many things are coming back to life. When things get difficult, the solution will come to you. When you are plagued by uncertainty, a helping hand will arrive. Clear your mind and tidy your home. You may find unexpected fortune. Bamboo Shoots possess unlimited potential. No one knows how tall a Bamboo Shoot can truly grow. The mere sight of it is enough to get you excited about the future.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Bamboo_Shoot.png/revision/latest/scale-to-width-down/512?cb=20210113032515',
	},
	{
		type: fortune.GOOD,
		title: 'Warm Bird Egg',
		desc: "A day when nothing especially noteworthy happens — and yet, you cannot help but feel happy. You will find something you thought was long gone in the nooks and crannies you never noticed before. Food will taste fresher than usual, and the scenery ahead will appear brighter than ever. The world is full of new and wonderful things. Eggs brim with limitless potential — they are the seeds of the future. By the same token, think what the world represents to the life inside the egg: A place filled with unknown and exciting things. Just make sure to treat the egg gently.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Bird_Egg.png/revision/latest/scale-to-width-down/512?cb=20210113032808',
	},
	{
		type: fortune.MODEST,
		title: 'Fresh Mint',
		desc: "The air pressure is a little low, which makes you think back far into your past. Memories of your long-lost youth and friends with whom you have lost contact come to mind. They bring with them a touch of nostalgia, and a hint of sadness. It is good to remember the past once in a while. May it help calm your mind and face the future. Wherever there is vegetation, there is Mint. In this sense, Mint is the most resilient life-form in the world. It is said that it even grows amid the snow of Mondstadt's highest mountain.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Mint.png/revision/latest/scale-to-width-down/512?cb=20210109221323',
	},
	{
		type: fortune.MODEST,
		title: 'Luminescent Spine',
		desc: "Clouds cover half the moon and the fog is thick. Above you is the moon shrouded by cloud. Ahead of you, everything is engulfed by fog. Though the way ahead seems unclear at the moment, all will become clear when the time comes. Take this opportunity to improve yourself while waiting for the clouds to clear. The Luminescent Spine shines with a faint glow, but shines strong nonetheless. Though it may not be the brightest of lights, it is enough to illuminate the road ahead.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Luminescent_Spine.png/revision/latest/scale-to-width-down/512?cb=20210109221356',
	},
	{
		type: fortune.MODEST,
		title: 'Tingling Electro Crystal',
		desc: "A calm and serene day. Nothing will happen to make you sad. Today is a good day to catch up with friends you have not contacted in a long time, to reminisce and to laugh. When you eat, you will rediscover a flavor from the past that you tried once, long ago. Cherish the things and people in your life. Electro Crystal contains limitless energy. Find a way to channel this energy and you may achieve great things.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/9/99/Item_Electro_Crystal.png/revision/latest/scale-to-width-down/512?cb=20201202043003',
	},
	{
		type: fortune.MODEST,
		title: 'Fallen Pinecone',
		desc: "The clouds hang low in the sky, and they will build up further still. Sooner or later, a thunderstorm will suddenly come crashing down from above. Yet the rainbow awaits at the end of the storm. Stick to tried and tested ways and maintain peace. Act rashly, and you may struggle to succeed. Not all pinecones can grow into large pine trees. Growth requires the right environment, but also a little luck. So don't put too much pressure on yourself.Wait patiently for the rainbow.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/3/35/Item_Pinecone.png/revision/latest/scale-to-width-down/512?cb=20210109222149',
	},
	{
		type: fortune.RISING,
		title: 'Luscious Lavender Melon',
		desc: "Days when clouds drift through the sky bring a feeling of great contentment. Work will go smoothly, and good ideas will come to you, even during your noon nap. Suddenly, you will find brand new common ground with old friends... Every day will be positive and filled with cheer. People often praise the virtue of being the same on the inside as on the outside. But the Lavender Melon's extravagant exterior hides a humble sweetness within.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Lavender_Melon.png/revision/latest/scale-to-width-down/512?cb=20210721030831',
	},
	{
		type: fortune.RISING,
		title: 'Mature Sea Ganoderma',
		desc: "The blade that has been tempered for ten years will shine bright today. Your misfortune is gone and you are rising from the pit of despair. You've trained hard for years without showing your skill.But today is the perfect opportunity to showcase your capabilities.If you encounter obstacles, do not fret.Draw your sword without fear and fight with all your might.The Sea Ganodermite is a weak creature that must endure years of hardship to grow into a Sea Ganoderma.People who strive toward their goals will surely reap the fruits of their labor.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/6/6d/Item_Sea_Ganoderma.png/revision/latest/scale-to-width-down/512?cb=20210610205502',
	},
	{
		type: fortune.MIS,
		title: 'Frosty Mist Flower',
		desc: "Be careful. You may be about to lose something that you treasure. Remember to rest if you're feeling unwell.Think twice before you make a decision.The Mist Flower gives off a coldness that says: I am unapproachable.But sometimes, that same cool air can calm one's heart and mind. This may help you to judge situations correctly, and act wisely.Be careful. You may be about to lose something that you treasure. Remember to rest if you're feeling unwell.Think twice before you make a decision.The Mist Flower gives off a coldness that says: I am unapproachable.But sometimes, that same cool air can calm one's heart and mind. This may help you to judge situations correctly, and act wisely.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Mist_Flower_Corolla.png/revision/latest/scale-to-width-down/512?cb=20210113032603',
	},
	{
		type: fortune.MIS,
		title: 'Drifting Seagrass',
		desc: "It seems like it will rain today. You may encounter an unpleasant situation. You will still be waiting for the commendation you are due, and you may be served the wrong dish by the waiting staff. Nothing terrible happens, but everything seems to irritate you. It's just one of those days.Seagrass is a gentle but tenacious plant.Despite the bitterness of the seawater around it, it refuses to change.Hold onto your gentle nature, even when nothing is going your way.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Item_Seagrass.png/revision/latest/scale-to-width-down/512?cb=20210721030844',
	},
	{
		type: fortune.GREAT_MIS,
		title: 'Curly Lizard Tail',
		desc: "A day spent feeling empty inside can lead to a profound sense of powerlessness. The problems you face are defying your attempts to solve them.  This futile endeavor is wearing you down and making you ill. But do not be discouraged that everything is going downhill. Survive this difficult period and one day you will achieve something great. When faced with a potential danger, lizards will sacrifice their tails for survival. If you encounter emotions that you struggle to control, it may be best to cut something out of your life.",
		thumb: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Lizard_Tail.png/revision/latest/scale-to-width-down/512?cb=20201202043057',
	}
];

var fortuneSlips = rawFortuneSlips.map(
	slip => (
		new MessageEmbed()
			.setColor('#0099ff')
			.setAuthor(slip.type)
			.setTitle(slip.title)
			.setDescription(slip.desc)
			.setThumbnail(slip.thumb)
			.setTimestamp()
	)
)

module.exports = {fortuneSlips}
