import styles from "../../styles/ToDos.module.css";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  const todos = await data.json();

  return {
    props: { todos },
  };
}

export default function ToDos({ todos }) {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <div className={styles.container}>
        <h1>Posts</h1>
        <ul className={styles.todolist}>
          {todos.map((todo) => {
            return(
            <li key={todo.id}>
              {todo.id} - {todo.title} - 
              <Link href={`/todos/${todo.id}`}>
                <a> Ver mais</a>
              </Link>
            </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
