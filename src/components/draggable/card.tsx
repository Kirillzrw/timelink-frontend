// import { memo } from "react"
// import clsx from "clsx"
// import { useSortable } from "@dnd-kit/sortable"

// type Props<T> = {
//   data: T[]
//   selected?: boolean
//   handleSelect: (id: number) => void
//   isDragging?: boolean
// }

// const Card = memo((props: Props<T>) => {
//   // const { data, selected = false, handleSelect, isDragging = false } = props

//   // const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
//   //   id: id,
//   // })

//   const style = {
//     transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
//     transition,
//     opacity: isDragging ? 0 : 1,
//   }

//   return (
//     <div
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       className={clsx("border select-none transition-colors duration-300 ease-in-out cursor-pointer border-black", {
//         "bg-blue-500": selected,
//         "bg-white": !selected,
//       })}
//       style={style}>
//       <div className="p-2">
//         <h3 className="text-lg font-bold" />
//         <p className="text-sm text-gray-500" />
//       </div>
//     </div>
//   )
// })

// export default Card
