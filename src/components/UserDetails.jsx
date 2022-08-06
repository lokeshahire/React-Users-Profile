// import module.css here;
import styles from "./userDetails.module.css";
const UserDetails = ({
  id,
  avatar,
  first_name,
  last_name,
  address,
  karma,
  followers,
  posts,
  is_following,
}) => {
  return (
    <>
      <div className={styles.main} data-testid="user-container">
        {/* user image */}
        <img className={styles.avatar} src={avatar} alt="" />
        <div>
          <div className={styles.name}>
            <h3 className={styles.user_fname} data-testid="user-fname">
              {first_name}
            </h3>
            <h3 data-testid="user-lname">{last_name}</h3>
          </div>
          <div>
            <p className={styles.address} data-testid="user-address">
              {address}
            </p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{posts}</h3>
        </div>
        <button className={styles.button} data-testid="follow-btn">
          {is_following ? "Unfollow" : "Follow"}
        </button>
      </div>
    </>
  );
};
export default UserDetails;
