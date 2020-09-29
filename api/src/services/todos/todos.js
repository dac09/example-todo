import { db } from 'src/lib/db'
import { context } from '@redwoodjs/api'

export const todos = () => db.todo.findMany()

export const createTodo = ({ body }) => {
  return db.todo.create({ data: { body: `${body} - ip: ${context.ip}` } })
}

export const updateTodoStatus = ({ id, status }) => {
  console.log('xxx service context', context)
  return db.todo.update({
    data: { status },
    where: { id },
  })
}

export const renameTodo = ({ id, body }) =>
  db.todo.update({
    data: { body },
    where: { id },
  })
