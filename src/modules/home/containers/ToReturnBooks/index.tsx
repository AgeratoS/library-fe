import { Book } from "@/modules/book/types";
import { AppDispatch } from "@/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DashboardBooks } from "../../components";

function ToReturnBooks() {
    
    const dispatch: AppDispatch = useDispatch();

    // TODO: Необхоидмо сюда добавить книги,
    // которые необходимо скоро вернуть
    // Как варинат, можно прогрузить все книги изначально, а дальше выбирать
    // по селектору
    useEffect(() => {

    }, [])

    const books: Book[] = [];
    
    return (
        <>
            <DashboardBooks 
                title="To return"
                caption="It's important to return books before the deadline"
                books={books}
            />
        </>
    );
}

export default ToReturnBooks;