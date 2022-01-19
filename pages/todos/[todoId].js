import Link from "next/link";

import styles from "../../styles/ToDos.module.css";

export async function getStaticProps(context) {
  const { params } = context;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.todoId}`
  );

  const todo = await data.json();

  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  return (
    <div className={styles.container}>
      <h1>{todo.id} - {todo.title}</h1>
      <div className={styles.bodyList}>
        <h3>{todo.body}</h3>
      </div>
    </div>
  );
}
