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
            resume: "c_4rHeDT4jFam35KEwjdcDoZxutNY3D4oh2szkkrSAP",
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
