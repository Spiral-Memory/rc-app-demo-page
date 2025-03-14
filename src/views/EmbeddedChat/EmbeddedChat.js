import { EmbeddedChat } from "@embeddedchat/react";
import StormySeas from "../../theme/StormySeas";
import styles from "./EmbeddedChat.module.css";

const ECComponent = ({ isEcOpen, setIsECOpen }) => {
  return (
    <div className={styles.ecContainer}>
      <EmbeddedChat
        host="https://demo.qa.rocket.chat"
        roomId="669fd7388129fb4346981692"
        anonymousMode
        theme={StormySeas}
        height="85vh"
        width="55vw"
        auth={{
          flow: "TOKEN",
          credentials: {
            resume: "7GLWfzNTr6ZbyAv0BdSluh15LF4rtHdXnkMChqSlknc",
          },
        }}
        isClosable={true}
        setClosableState={() => {
          isEcOpen && setIsECOpen((prev) => !prev);
        }}
      />
    </div>
  );
};

export default ECComponent;
