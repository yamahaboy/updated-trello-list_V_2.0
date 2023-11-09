import React, { useState } from "react";
import { useAppSelector } from "../../store/reducers/store";
import { Button, List, ListItem, Typography } from "@mui/material";
import { Strong } from "../Card/styles";
import { PostItemStyles, PostListStyles, Title } from "./styles";
import ModalWindowOfComments from "../ModalWindowOfComments/ModalWindowOfComments";

const PostsList: React.FC = () => {
  const { posts, comments, users, inputData, userfilter } = useAppSelector(
    (state) => state.todoReducer
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [selectedUserName, setSelectedUserName] = useState<string>("");

  const getUserByPostId = (postId: number) => {
    if (postId <= 10) {
      return users.find((user) => user.id === postId);
    } else {
      const lastDigit = postId % 10;
      return users.find((user) => user.id === lastDigit);
    }
  };

  const handleClickOpenModal = (postId: number) => {
    setSelectedPostId(postId);
    setIsModalOpen(true);
    const user = getUserByPostId(postId);
    if (user) {
      setSelectedUserName(user.name);
    }
  };

  const filteredPostsWithUserIds = posts
    .map((post) => {
      const user = getUserByPostId(post.id);
      const userId = user ? user.id : null;

      return {
        ...post,
        userId,
      };
    })
    .filter(
      (post) =>
        (userfilter === null || post.userId === userfilter) &&
        post.title.toLowerCase().includes(inputData?.toLowerCase() || "")
    );

  const handleClickCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <List sx={PostListStyles}>
      <Typography variant="h4" gutterBottom>
        List of Posts
      </Typography>

      {filteredPostsWithUserIds.map((post) => (
        <ListItem key={post.id} sx={PostItemStyles}>
          <Title>
            <Strong>Title: </Strong>
            {post.title}
          </Title>
          <p>
            <Strong>Body:</Strong> {post.body}
          </p>
          <Button
            sx={{
              width: "20px",
              height: "20px",
              border: "1px solid gray",
              float: "right",
            }}
            onClick={() => handleClickOpenModal(post.id)}
          />
        </ListItem>
      ))}

      {selectedPostId !== null && (
        <ModalWindowOfComments
          open={isModalOpen}
          onClose={handleClickCloseModal}
          user={selectedUserName}
          name={
            comments.find((comment) => comment.postId === selectedPostId)
              ?.name || ""
          }
          body={
            comments.find((comment) => comment.postId === selectedPostId)
              ?.body || ""
          }
        />
      )}
    </List>
  );
};

export default PostsList;
