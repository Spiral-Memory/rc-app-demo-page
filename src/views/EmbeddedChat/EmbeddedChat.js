import { EmbeddedChat } from "ec-test";
import StormySeas from "../../theme/StormySeas";
import styles from "./EmbeddedChat.module.css";

const ECComponent = () => {
  return (
    <div className={styles.ecContainer}>
      <EmbeddedChat
        anonymousMode
        theme={StormySeas}
        height="75vh"
        width="48vw"
      />
    </div>
  );
};

export default ECComponent;
