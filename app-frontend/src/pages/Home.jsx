import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner9 from '../assets/banner9.jpg'; // Ensure this file exists

const Home = () => {
  const [expandedCards, setExpandedCards] = useState({});
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  // Sample topics data - replace with your actual content
  const topics = [
    {
      id: 1,
      title: "A Colossal City in Space!",
      content: [
        "Imagine your favorite town or city without any potholes, traffic, pollution, or crime of any kind! Impossible? The Bible tells of a city with streets paved with gold! And within its tall walls made of pure jasper, there won't be even one person coughing, sneezing, or coming down with a cold.",
        "Everyone will be in perfect health and will enjoy each other's company. Would you like to visit this city? Well, not only can you visit, you can live there! Read on to find out how.",
        "1. Who is the architect and builder of this incredible city?",
        "God is not ashamed to be called their God, for He has prepared a city for them (Hebrews 11:16).",
        "Answer: The Bible says that God is building an awesome and huge city for His peopleand it’s as real as any other city in the world!",
        "2. How does the Bible describe this amazing city?",
        "Answers:  ",
        "A. Name: The city is called the New Jerusalem (Revelation 21:2).",
        "B. Location: It will come down out of heaven from God (Revelation 21:2).",
        "C. Size: The city is laid out as a square; its length is as great as its breadth. And he measured the city with the reed: twelve thousand furlongs (Revelation 21:16). The city is perfectly square. Its perimeter is 12,000 furlongsequivalent to 1,500 miles. It is 375 miles long on each side!",
        "D. Walls: The city has a great and high wall with twelve gates (Revelation 21:17). The wall is made of jasper, and the city is made of pure gold, like clear glass (Revelation 21:18).",
        "E. Gates: It had a great, high wall with twelve gates. There were three gates on the east, three on the north, three on the south and three on the west. The twelve gates were twelve pearls, each gate made of a single pearl (Revelation 21:12, 13, 21 NIV).",
        "F. Streets: The street of the city was pure gold, like transparent glass (Revelation 21:21).",
        "G. Appearance: The Holy City prepared as a bride beautifully dressed for her husband shone with the glory of God, and its brilliance was like that of a very precious jewel, like a jasper, clear as crystal. The city was laid out like a square, as long as it was wide (Revelation 21:2, 11, 16 NIV). The city, with all of its precious stones, gold, and shimmering beauty, will be lighted with the glory of God. Its breathtaking majesty and purity is compared to a bride beautifully dressed for her husband.",
      ]
    },
    {
      id: 2,
      title: "The Bride of Christ",
      content: [
        "The Bible says there is but one body, or church, into which Jesus calls His end-time people—the bride of Christ. To some, this is unnerving, as there are thousands of churches today that call themselves Christian.",
        "Virtually every one of them claims to be God's church, yet they each differ widely in biblical interpretation, faith, and practice. It's quite impossible for an honest seeker of truth to investigate the claims of each one.",
        "However, we can be thankful that Jesus has solved this dilemma for us by describing His church in such detail that you can easily identify it! That description, vivid and powerful, is found in Revelation 12 and 14, and it will thrill you with amazing truths that will help you in the end times.",
        "1. By what prophetic symbol does Jesus represent His true church?",
        "I have likened the daughter of Zion to a lovely and delicate woman (Jeremiah 6:2). Let us be glad and rejoice and give Him glory, for the marriage of the Lamb has come, and His wife has made herself ready. And to her it was granted to be arrayed in fine linen, clean and bright, for the fine linen is the righteous acts of the saints (Revelation 19:7, 8).",
        "Answer: Jesus symbolizes His true church (daughter of Zion) as a pure woman and the false, apostate churches as a harlot. (See also 2 Corinthians 11:2; Ephesians 5:22, 23; and Isaiah 51:16).",
        "2. In Revelation 12:1, Jesus symbolizes His church as a woman clothed with the sun, with the moon under her feet, and wearing a crown [KJV] of twelve stars. What do these symbols mean?",
        "Answer: The sun represents Jesus, His gospel, and His righteousness. The Lord God is a sun (Psalm 84:11). (See also Malachi 4:2.) Without Jesus there is no salvation (Acts 4:12). More than anything else, Jesus wants His church to overflow with His presence and glory. The moon under her feet represents the sacrificial system of the Old Testament. As the moon reflects the light of the sun, so the sacrificial system was helpful spiritually only as it reflected light from the Messiah to come (Hebrews 10:1). The crown of twelve stars represents the work of the 12 disciples, which crowned the early years of the New Testament church.",
        "3.  Next, the prophecy states that the woman is in labor, about to deliver a baby who would one day rule all nations with a rod of iron. She then delivered the male Child, and later He was taken up to God’s throne in heaven (Revelation 12:1, 2, 5). Who was this baby?",
        "Answer: The baby was Jesus. He will one day rule all nations with a rod of iron (Revelation 19:13–15; Psalm 2:7–9; John 1:1–3, 14). Jesus, who was crucified for our sins, was raised from the dead and ascended to heaven (Acts 1:9–11). His resurrection power in our lives is one of Jesus’ essential gifts to His people (Philippians 3:10).",
        "4. Revelation 12:3, 4 introduces a great, fiery red dragon who hated the male Child and tried to kill him at birth. What does this dragon represent?",
        "Answer: The dragon represents Satan, who was cast out of heaven (Revelation 12:7–9) and who was working through the pagan Roman Empire at the time of Jesus’ birth. The ruler who tried to kill Jesus at birth was Herod, a king under pagan Rome. He killed all the male babies of Bethlehem, hoping that one of them would be Jesus (Matthew 2:16).",
        "5. What did Satan do after he failed in his plan to destroy Jesus?",
        "Answer: Since he was no longer able to attack Jesus personally, he aimed his fury and persecution at God’s church and His people. (Revelation 12:13).",
        "6. In Revelation 12:6, 14, what did the woman (church) do to protect herself, and what is the wilderness?",
        "Answer: Verses 6 and 14 say, The woman fled into the wilderness, where she was protected for a time and times and half a time (or 1,260 literal years) from the wrath of Satan who was working through papal Rome. The two wings represent the protection and support God gave the church during her time in the wilderness (Exodus 19:4; Deuteronomy 32:11). The time spent in the wilderness is the same 1,260-year period of papal prominence and persecution (ad 538 to 1798) that is repeatedly mentioned in Bible prophecy. In Bible Prophecy, one prophetic day equals one literal year (Ezekiel 4:6).",
        "7. In Revelation 12:17, God calls His end-time church the remnant [KJV]. What does the word remnant mean?",
        "Answer: It means the last remaining portion. In reference to Jesus’ church, it means His church of the very last days, which is one based on all of Scripture, as was the apostolic church.",
        "8. In Revelation 12:17, what additional two-point description did Jesus give of His end-time remnant church?",
        "Answer: It would keep all the Ten Commandments, including the seventh-day Sabbath of the fourth commandment (John 14:15; Revelation 22:14). It also would have the testimony of Jesus, which the Bible tells us is the spirit of prophecy (Revelation 19:10).",
        " The Seventh-day Adventist Church fits these specifications:",
        "A. Keeps the Ten Commandments, including the fourthGod’s seventh-day Sabbath.",
        "B. Has the spirit of prophecy, which is manifested in the ministry of Ellen G. White.",
        "C. Preaches the everlasting gospel of the Three Angels’ Messages of Revelation 14:6–12.",
        "D. Is a worldwide missionary church, working in nearly all countries today, preparing people for Jesus’ soon return.",
      ]
    },
    {
      id: 3,
      title: "The Lost Day of History",
      content: [
        "Did you know there is a very important day in the Bible that almost everyone has forgotten about? It’s astounding that only a few people are aware of it, because it’s one of the most significant days in all of human history! It’s not only a day in the past, but it also has meaning for us now and in the future. Furthermore, what happens on this neglected day can have a positive effect on your life. Want to know more amazing facts about this lost day of history? Then read over this Study Guide carefully.",
        "1. On what day did Jesus customarily worship?",
        "'And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.' Luke 4:16.",
        "Answer: Jesus customarily worshiped on the Sabbath.",
        "2. But which day of history has been lost?",
        "The seventh day is the Sabbath of the Lord your God (Exodus 20:10). When the Sabbath was past very early in the morning, on the first day of the week, they came to the tomb when the sun had risen (Mark 16:1, 2).",
        "Answer: A little detective work is necessary to answer this question. Many believe that the Sabbath is the first day of the week, Sunday, but the Bible actually says that the Sabbath is the day that comes just before the first day of the week. According to Scripture, the Sabbath is the seventh day of the weekthat is, Saturday.",
        "3. Where did the Sabbath come from?",
        "In the beginning God created the heavens and the earth. And on the seventh day God ended His work which He had done, and He rested on the seventh day from all His work which He had done. Then God blessed the seventh day and sanctified it (Genesis 1:1; 2:2, 3).",
        "Answer: God made the Sabbath at the time of Creation, when He made the world. He rested on the Sabbath and blessed and sanctified itthat is, He set it apart for a holy use.",
        "4. What does God say about the Sabbath in the Ten Commandments?",
        "Remember the Sabbath day, to keep it holy. Six days you shall labor and do all your work, but the seventh day is the Sabbath of the Lord your God. In it you shall do no work: you, nor your son, nor your daughter, nor your male servant, nor your female servant, nor your cattle, nor your stranger who is within your gates. For in six days the Lord made the heavens and the earth, the sea, and all that is in them, and rested the seventh day. Therefore the Lord blessed the Sabbath day and hallowed it (Exodus 20:8–11).",
        "Answer: In the fourth of the Ten Commandments, God says we are to observe the seventh-day Sabbath as His holy day. It seems God knew that people would be prone to forget His Sabbath, so He began this commandment with the word remember.",
        "5. But haven’t the Ten Commandments been changed?",
        "Exodus 20:1 says, God spoke all these words, saying [the Ten Commandments follow in verses 2–17]. God said, My covenant I will not break, nor alter the word that has gone out of My lips (Psalm 89:34). Jesus said, It is easier for heaven and earth to pass away than for one tittle of the law to fail (Luke 16:17).",
        "Answer: No, indeed! It is impossible for any of God’s moral law to change. All Ten Commandments are still binding today. Just as the other nine commandments haven’t changed, neither has the fourth commandment.",
        "6. Doesn’t Colossians 2:14–17 do away with the seventh-day Sabbath?",
        "Not at all. It refers only to the annual, ceremonial sabbaths that were a shadow of things to come and not to the seventh-day Sabbath. There were seven yearly holy days, or festivals, in ancient Israel that were also called sabbaths (see Leviticus 23). These were in addition to, or besides the Sabbaths of the Lord (Leviticus 23:38), or seventh-day Sabbath. Their main significance was in foreshadowing, or pointing to, the cross and ended at the cross. God’s seventh-day Sabbath was made before Adam’s sin, and therefore could foreshadow nothing about deliverance from sin. That’s why Colossians 2 differentiates and specifically mentions the sabbaths that were a shadow.",
        "7. According to Romans 14:5, isn’t the day we keep a matter of personal opinion?",
        "Notice that the whole chapter is on judging one another (verses 4, 10, 13) over doubtful things (verse 1). The issue here is not over the seventh-day Sabbath, which is a part of the moral law, but over other religious days. Jewish Christians were judging Gentile Christians for not observing them. Paul is simply saying, Don’t judge each other. That ceremonial law is no longer binding.",
      ]
    },
    {
      id: 4,
      title: "God's Free Health Plan",
      content: [
        "Good medical care is priceless but wouldn’t it be great if we didn’t need doctors anymore? Well, did you know there is a proven way to put a lot of doctors out of work? Take care of your body! Scientists have sounded the alarm about cholesterol, tobacco, stress, obesity, and alcohol, so why press your luck? God truly cares how you treat your body, and He’s given you a free health plan to go bythe Bible! For amazing facts about how you can have abundant health and longer life, look over this Study Guide.",
        "1. Are health principles really a part of true Bible religion?",
        "Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers (3 John 1:2).",
        "Answer: Yes. The Bible rates health right near the top of the list in importance. A person’s mind, spiritual nature, and body are all interrelated and interdependent. What affects one affects the others. If the body is misused, the mind and the spiritual nature cannot become what God planned they should beand you won’t be able to live an abundant life. (See John 10:10.)",
        "2. Why did God give health principles to His people?",
        "The Lord commanded us to observe all these statutes, to fear the Lord our God, for our good always, that He might preserve us alive (Deuteronomy 6:24).",
        "You shall serve the Lord your God, and He will bless your bread and your water. And I will take sickness away from the midst of you (Exodus 23:25).",
        "Answer: God gave health principles because He knows what is best for the human body. Automobile manufacturers place an operations manual in the glove compartment of each new car because they know what is best for their creation. God, who made our bodies, also has an operations manual. It is the Bible. Ignoring God’s operations manual often results in disease, twisted thinking, and burned-out lives, just as abusing a car can result in serious car trouble. Following God’s principles results in saving health (Psalm 67:2 KJV) and more abundant life (John 10:10). With our cooperation, God can use these great health laws to significantly reduce and eliminate the effects of the diseases of Satan (Psalm 103:2, 3).",
        "3. What are some of the simple yet important health laws found in the Bible?",
        "Answer:  Here are 11 Bible health principles:",
        "Answer A. Eat your meals at regular intervals, and do not use animal fat or blood. Feast [eat] at the proper time (Ecclesiastes 10:17). This shall be a perpetual statute you shall eat neither fat nor blood (Leviticus 3:17).",
        "Note: Science has confirmed that most heart attacks result from high cholesteroland that the use of fats is largely responsible for high levels of cholesterol. It looks like the Lord knows what He is talking about after all, doesn’t it?",
        "Answer B. Don’t overeat. Put a knife to your throat if you are a man given to appetite (Proverbs 23:2). In Luke 21:34, Christ specifically warned against carousing (intemperance) in the last days. Overeating, a form of intemperance, is responsible for many degenerative diseases.",
        "Answer C. Don’t harbor envy or hold grudges. These kinds of sinful feelings actually disrupt body processes. The Bible says that envy is rottenness to the bones (Proverbs 14:30). Christ even commanded us to clear up grudges that others might hold against us (Matthew 5:23, 24).",
        "Answer D. Maintain a cheerful, happy disposition. A merry heart does good, like medicine (Proverbs 17:22). As he thinks in his heart, so is he (Proverbs 23:7). Many diseases from which people suffer are a result of depression. A cheerful, happy disposition imparts health and prolongs life!",
        "Answer E.Put full trust in the Lord. The fear of the Lord leads to life, and he who has it will abide in satisfaction (Proverbs 19:23). Trust in the Lord strengthens health and life. My son, give attention to my words for they are life to those who find them, and health to all their flesh (Proverbs 4:20, 22). Health comes from obedience to God’s commands and from putting full trust in Him.",
        "Answer F. Balance work and exercise with sleep and rest. Six days you shall labor and do all your work, but the seventh day is the Sabbath of the Lord your God. In it you shall do no work (Exodus 20:9, 10). The sleep of a laboring man is sweet (Ecclesiastes 5:12). In the sweat of your face you shall eat bread (Genesis 3:19). It is vain for you to rise up early, to sit up late (Psalm 127:2). For what has man for all his labor, and for the striving of his heart with which he has toiled under the sun? Even in the night his heart takes no rest. This also is vanity (Ecclesiastes 2:22, 23).",
        "Answer G. Keep your body clean. Be clean (Isaiah 52:11).",
        "Answer H. Be temperate in all things. Everyone who competes for the prize is temperate in all things (1 Corinthians 9:25). Let your gentleness [KJV: moderation] be known to all men (Philippians 4:5).",
        "Answer J. Make mealtime a happy time. Every man should eat and drink and enjoy the good of all his labor it is the gift of God (Ecclesiastes 3:13). Unhappy scenes at mealtime hinder digestion. Avoid them.",
        "Answer K. Help those who are in need. Loose the bonds of wickedness undo the heavy burdens share your bread with the hungry, and bring to your house the poor who are cast out; when you see the naked cover him, and your healing shall spring forth speedily (Isaiah 58:6–8). This is too plain to misunderstand: When we help the poor and needy, we improve our own health.",
      ]
    }
  ];

  const toggleReadMore = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="page home">
      {/* Image Slider */}
      <div className="home-banner">
        <Slider {...sliderSettings}>
          <div>
            <img src={banner1} alt="Church Banner 1" />
          </div>
          <div>
            <img src={banner2} alt="Church Banner 2" />
          </div>
          <div>
            <img src={banner3} alt="Church Banner 3" />
          </div>
        </Slider>
      </div>

      <div className="welcome-section">
        <div className="welcome-card">
          <p className="welcome-subtitle">
            "Making disciples of Jesus Christ by proclaiming the everlasting gospel of the Three Angels' Messages - Revelation 14:6-12"
          </p>
          <div className="welcome-content">
            <ul className="service-times">
              <li>Friday: 5:00 pm to 6:30 pm</li>
              <li>Saturday: 8:00 am to 4:30 pm</li>
            </ul>
          </div>
        </div>
      </div>

       {/* Topics Section */}
      <div className="topics-section">
        <div className="topics-grid">
          {topics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.title}</h3>
              <div>
                {expandedCards[topic.id] ? (
                  topic.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{topic.content[0].substring(0, 100)}...</p>
                )}
              </div>
              <button 
                className="read-more-btn"
                onClick={() => toggleReadMore(topic.id)}
              >
                {expandedCards[topic.id] ? 'Read less' : 'Read more'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Pastor Section */}
      <div className="pastor-section flex flex-col md:flex-row items-center justify-center bg-gray-100 py-10 px-6 mt-10">
        {/* Pastor Image */}
        <div className="w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full shadow-lg">
          <img
            src={banner9}
            alt="Pastor Charles"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pastor Name */}
        <div className="mt-4 md:mt-0 md:ml-20 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">Pr. Charles Nyakundi</h2>
          <p classname="text-gray-600">"The Spirit of Christ is a missionary spirit. It is the spirit that actuated Christ when He was on earth, and it is the spirit that will actuate His followers. It is the spirit that impelled Him to go about doing good, healing the sick, and preaching the gospel to the poor. This is the spirit that we are to cherish and cultivate."</p>
        </div>
      </div>
    </div>
  );
};

export default Home;