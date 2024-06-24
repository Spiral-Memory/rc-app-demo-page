import { EmbeddedChat } from "ec-test";
import StormySeas from "../../theme/StormySeas";
import styles from "./EmbeddedChat.module.css";

const ECComponent = () => {
  return (
    <div className={styles.ecContainer}>
      <EmbeddedChat
        host="https://spiral-memory.rocket.chat"
        roomId="6679b390ef5048f098b06d48"
        anonymousMode
        theme={StormySeas}
        height="75vh"
        width="48vw"
      />
    </div>
  );
};

export default ECComponent;
