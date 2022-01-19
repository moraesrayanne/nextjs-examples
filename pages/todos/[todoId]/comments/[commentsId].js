import Link from "next/link";
import { useRouter } from "next/router";

export default function Comments() {
    const router = useRouter();
    const todoId = router.query.todoId;
    const commentId = router.query.commentsId;


    return (
        <>
            <Link href={`/todos/${todoId}`}><a>Voltar</a></Link>
            <h1>Exibindo comentario numero: {commentId}</h1>
        </>
    )
}