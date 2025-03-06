import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom'; 

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true); 
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
    <div className="w-[400px]  h-screen flex flex-col items-center justify-center">
      <motion.div  initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{duration: 1.2}}>
      <div id="card" className={`${cardClass}`} onClick={toggleCard}>     
        <div id="card-inside">
          <div className="wrap">
            <p>Dear Pavalam Chocalingum,</p>
            <p>Happy Birthday to a truly irreplaceable friend! 🎉 It feels like just yesterday we were sharing books and dreams in those science tuitions, dissecting not just biology but every part of our lives. Over six years have flown by, but my gratitude for having you in my life only grows stronger with each passing day.</p>
            <p>
            We've laughed together, fought side by side, and even shed a few tears—all of which have only deepened the bond we share. Life has taken us on different paths now, yet our connection remains unbreakable, proving that true friendship doesn't know the meaning of distance.
            </p>
            <p>
            I am endlessly proud of you, Med. Through all of life's ups and downs, you've stood strong, a warrior in every sense. Your resilience inspires me, and I have no doubt that those big dreams of yours are just within reach. You're not just my friend; you're the sister I got to choose, a blessing I cherish deeply.
            </p>
            <p>
            Remember, no matter what life throws your way, I'll always be right here, your steadfast ally, ready to take on the world with you. Here’s to more years of friendship, growth, and adventures. I love you immensely, and I can't wait to see all that you accomplish.
            </p>
            <p>
            Happy Birthday, my sister, my friend.
            </p>
            <p>
            With all my love,
            </p>
            <p className="signed">Teesha</p>
          </div>
        </div>

        <div id="card-front">
          <div className="wrap">
            <h1>Happy 21st Birthday!</h1>
          </div>
        </div>
    </div>

      </motion.div>

    {/* prone to bugs */}
      {isCardOpened && (
        <motion.div className="-mt-[3rem]" initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{duration: 1.2}}> 
        <Link to ='/cake'>
        <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
            Next Page
          </p>
        </Link>
            
        </motion.div>
         
        )}

    </div>
    
    </div>
    
  );
}

export default Card;