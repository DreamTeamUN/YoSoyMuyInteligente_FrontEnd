

const sampleCommentsRaw = require('./sampleComments');

sampleCommentsRaw.forEach(c => {
  if (c.children) {
    c.childrenCount = c.children.length;
  }
});

const sampleComments = Object.freeze(sampleCommentsRaw);

import moment from "moment";

export function getComments() {
  const c = [...sampleComments];
  return c.splice(c.length - 5);
}

export function paginateComments(
  comments,
  from_commentId,
  direction,
  parent_commentId
) {
  const c = [...sampleComments];
  if (!parent_commentId) {
    const lastIndex = sampleComments.findIndex(c => {
      return c.commentId == from_commentId;
    });
    if (direction == "up") {
      comments = comments.concat(c.splice(lastIndex + 1, 5));
    } else {
      let start = lastIndex - 6 > 1 ? lastIndex - 6 : 0;

      let part = c.slice(start, lastIndex);
      console.log(start, lastIndex);
      comments = [...part, ...comments];
    }
  } else {
    const parentLastIndexDB = sampleComments.findIndex(
      c => c.commentId == parent_commentId
    );
    const children = c[parentLastIndexDB].children;
    const target = children.findIndex(c => c.commentId == from_commentId);
    const existingIndex = comments.findIndex(
      c => c.commentId == parent_commentId
    );

    if (direction == "up") {
      const append = children.slice(target + 1, 5);
      comments[existingIndex].children.concat(append);
    } else {
      let start = target - 6 >= 0 ? target : 0;
      const prepend = children.slice(start - 6, target);
      comments[existingIndex].children = [
        ...prepend,
        ...comments[existingIndex].children
      ];
    }
  }
  return comments;
}


export function save(comments, text, parentCommentId, date, username) {
  //find last comment id
  let lastCommentId = 0;
  sampleComments.forEach(c => {
    if (c.commentId > lastCommentId) {
      lastCommentId = c.commentId;
    }
    if (c.children) {
      c.children.forEach(c2 => {
        if (c2.commentId > lastCommentId) {
          lastCommentId = c2.commentId;
        }
      });
    }
  });

  let com = {
    parentId: null,
    commentId: lastCommentId + 1,
    created_at: date,
    updated_at: date,
    liked: false,
    reported: false,
    email: username,
    body: text,
    likes: []
  };

  if (!parentCommentId) {
    comments.push(com);
  } else {
    comments.find(function(c) {
      if (c.commentId === parentCommentId) {
        com.parentId = c.commentId;
        if (c.children) {
          c.childrenCount = c.childrenCount + 1;
          c.children.push(com);
        } else {
          c.childrenCount = 1;
          c.children = [com];
        }
        return true;
      }
    }, this);
  }
  console.log(3, comments);
  return comments;
}
