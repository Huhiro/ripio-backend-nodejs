interface UserOrdersOpen {
    data: Data;
    message: null;
}

interface Data {
    orders: any[];
    pagination: Pagination;
}

interface Pagination {
    current_page: number;
    page_size: number;
    registers_count: number;
    total_pages: number;
}

export { 
    UserOrdersOpen
}