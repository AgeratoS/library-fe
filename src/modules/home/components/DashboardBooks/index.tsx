import { SafeRender } from "@/components";
import BooksList from "@/modules/book/components/BooksList";
import { Box, Typography } from "@mui/material";
import { DashboardBooksProps } from "../../types";

function DashboardBooks({books, caption, title}: DashboardBooksProps) {
    
    return (
        <Box py={7}>
            <Typography variant='h5'>{title}</Typography>
            <SafeRender data={caption}>
                <Typography variant='caption'>{caption}</Typography>
            </SafeRender>
            <Box py={3}>
                <BooksList books={books} />
            </Box>
        </Box>
    );
}

export default DashboardBooks;