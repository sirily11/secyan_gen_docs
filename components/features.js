import { useRouter } from "next/router";
import SpeedIcon from '@material-ui/icons/Speed';
import StorageIcon from '@material-ui/icons/Storage';
import PublicIcon from '@material-ui/icons/Public';
import styles from "./features.module.css";

const Feature = ({ text, icon }) => (
  <div className={styles.feature}>
    {icon}
    <h4>{text}</h4>
  </div>
);

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "The next generation of the BlockChain",
  "zh-CN": "下一代区块链技术"
};

export default () => {
  const { locale } = useRouter();
  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p className="text-lg mb-2 text-gray-600 md:!text-2xl">
        {TITLE_WITH_TRANSLATIONS[locale]}
      </p>
      <div className={styles.features}>
        <div>
          <Feature text="Fast" icon={<SpeedIcon />} />
        </div>
        <div>
          <Feature text="File Storage" icon={<StorageIcon />} />
        </div>
        <div>
          <Feature text="Distributed" icon={<PublicIcon />} />
        </div>
      </div>
    </div>
  );
};
