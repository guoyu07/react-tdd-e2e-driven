import React from 'react'

function BookList({books}) {
	return (
      <div>
        {
          books.map(book => {
            return (<article className="book">
              <h3 className="title">{book.name}</h3>
            </article>)
          })
        }
      </div>
      )
}

export default BookList