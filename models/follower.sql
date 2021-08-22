CREATE TABLE follower(
     user_id INT,
     follower_id INT,
     PRIMARY KEY(user_id,follower_id),
     UNIQUE INDEX(follower_id,user_id)
     );
