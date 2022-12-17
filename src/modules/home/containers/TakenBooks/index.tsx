import { Book } from "@/modules/book/types";
import { AppDispatch } from "@/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DashboardBooks } from "../../components";

function TakenBooks() {

    const dispatch: AppDispatch = useDispatch();

    // TODO: Необходимо здесь прогрузить книги, которые
    // были взяты
    useEffect(() => {

    }, []);

    const books: Book[] = [];
    
    
    return (
        <>
            <DashboardBooks 
                title="Books taken by you recently"
                caption="Read with pleasure!"
                books={books}
            />
        </>
    );
}

export default TakenBooks;