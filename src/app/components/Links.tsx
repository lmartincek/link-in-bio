// import React, { useState, useEffect } from "react";
// import {
//   DndContext,
//   closestCenter,
//   PointerSensor,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { SortableItem } from "./SortableItem";
// import { FormSection } from "./FormSection";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

// const generateId = () => Date.now();

// export const LinksForm = ({ modelValue, onUpdateModelValue }) => {
//   const [links, setLinks] = useState(() =>
//     modelValue.map((link) => ({ ...link, id: link.id || generateId() }))
//   );

//   // 🔥 Prevent infinite loop by checking if values actually change
//   useEffect(() => {
//     if (JSON.stringify(links) !== JSON.stringify(modelValue)) {
//       setLinks(modelValue.map((link) => ({ ...link, id: link.id || generateId() })));
//     }
//   }, [modelValue]);

//   const sensors = useSensors(useSensor(PointerSensor));

//   const appendLink = () => {
//     const newLink = { id: generateId(), l: "", u: "" };
//     setLinks((prevLinks) => {
//       const updatedLinks = [...prevLinks, newLink];
//       onUpdateModelValue(updatedLinks);
//       return updatedLinks;
//     });
//   };

//   const removeLink = (id) => {
//     setLinks((prevLinks) => {
//       const updatedLinks = prevLinks.filter((link) => link.id !== id);
//       onUpdateModelValue(updatedLinks);
//       return updatedLinks;
//     });
//   };

//   const updateLink = (id, field, value) => {
//     setLinks((prevLinks) => {
//       const updatedLinks = prevLinks.map((link) =>
//         link.id === id ? { ...link, [field]: value } : link
//       );
//       onUpdateModelValue(updatedLinks);
//       return updatedLinks;
//     });
//   };

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return;
//     setLinks((prevLinks) => {
//       const oldIndex = prevLinks.findIndex((link) => link.id === active.id);
//       const newIndex = prevLinks.findIndex((link) => link.id === over.id);
//       const updatedLinks = arrayMove(prevLinks, oldIndex, newIndex);
//       onUpdateModelValue(updatedLinks);
//       return updatedLinks;
//     });
//   };

//   return (
//     <FormSection
//       title="Links"
//       description="Add some links here"
//       defaultSlot={
//         <div>
//           <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//             <SortableContext items={links.map((link) => link.id)} strategy={verticalListSortingStrategy}>
//               {links.map((link) => (
//                 <SortableItem key={link.id} id={link.id}>
//                   <div className="relative mb-6 group bg-white shadow-md p-4 rounded-md">
//                     <button
//                       onClick={() => removeLink(link.id)}
//                       className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//                     >
//                       <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Label</label>
//                         <input
//                           type="text"
//                           value={link.l}
//                           onChange={(e) => updateLink(link.id, "l", e.target.value)}
//                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                         />
//                       </div>
//                       <div className="col-span-2">
//                         <label className="block text-sm font-medium text-gray-700">URL</label>
//                         <input
//                           type="url"
//                           value={link.u}
//                           onChange={(e) => updateLink(link.id, "u", e.target.value)}
//                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                         />
//                       </div>
//                     </div>
//                     {(!link.l || !link.u) && (
//                       <p className="mt-2 text-xs text-center text-gray-400">
//                         Link will be shown once a label and URL are added.
//                       </p>
//                     )}
//                   </div>
//                 </SortableItem>
//               ))}
//             </SortableContext>
//           </DndContext>

//           <button
//             onClick={appendLink}
//             className="mt-8 border-2 text-slate-500 border-slate-300 rounded-lg block w-full py-2 flex items-center justify-center gap-2"
//           >
//             <FontAwesomeIcon icon={faCirclePlus} className="h-6 w-6" /> Add Link
//           </button>
//         </div>
//       }
//     />
//   );
// };
