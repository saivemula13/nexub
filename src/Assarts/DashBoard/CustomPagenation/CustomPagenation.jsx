import React from 'react'
import { Form, Pagination } from 'react-bootstrap'
import "./CustomPagenation.scss"
function CustomPagenation() {
    return (
        <section className='pagenation d-flex align-items-center justify-content-end'>
            <h5 className='mb-0 me-3'>Items per page:</h5>
            <Form.Select className='me-3' aria-label="Default select example">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </Form.Select>
            <Pagination className='mb-0'>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </section>
    )
}

export default CustomPagenation