import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

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
      title: "Bible Study",
      content: [
        "Join our weekly Bible study sessions where we explore scripture and discuss its relevance to our daily lives. These gatherings provide opportunities for spiritual growth, fellowship, and deeper understanding of God's word in a supportive environment."
      ]
    },
    {
      id: 4,
      title: "Youth Programs",
      content: [
        "Our youth programs are designed to help young people develop their faith while building meaningful relationships. We offer a variety of activities, from retreats to service projects, that encourage spiritual growth and character development."
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
                  // Show all paragraphs when expanded
                  topic.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  // Show only first paragraph with ellipsis when collapsed
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
    </div>
  );
};

export default Home;