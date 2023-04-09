import { LocalGithubUser } from "types";
import styles from "./UserInfo.module.scss";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { InfoItem, InfoItemProps } from "components/InfoItem";

interface UserInfoProps
  extends Pick<LocalGithubUser, "location" | "twitter" | "company" | "blog"> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    { icon: <LocationIcon />, text: location },
    { icon: <BlogIcon />, text: blog, isLink: true },
    { icon: <TwitterIcon />, text: twitter },
    { icon: <CompanyIcon />, text: company },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, ind) => (
        <InfoItem {...item} key={ind} />
      ))}
    </div>
  );
};
