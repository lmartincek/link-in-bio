import React, { useState, useEffect, useMemo } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { FormSection } from "./FormSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { ExternalLinksShort } from "../page";

type Props = {
    modelValue: ExternalLinksShort[],
    onUpdateModelValue: (value: ExternalLinksShort[]) => void;
}

export const LinksForm = ({ modelValue, onUpdateModelValue }: Props) => {
    const generateId = () => Math.floor(Math.random() * 100000);

    const processedModelValue = useMemo(() => {
      return modelValue.map((link) => ({
        ...link,
        id: link.id ?? generateId(),
      }));
    }, [modelValue]);
  
    const [links, setLinks] = useState(processedModelValue);
  
    useEffect(() => {
      setLinks(processedModelValue);
    }, [JSON.stringify(modelValue)]);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        onUpdateModelValue(links);
      }, 500);
  
      return () => clearTimeout(handler);
    }, [links]);
  
    const appendLink = () => {
      setLinks((prev) => [...prev, { id: generateId(), l: "", u: "" }]);
    };
  
    const removeLink = (id: number) => {
      setLinks((prev) => prev.filter((link) => link.id !== id));
    };
  
    const updateLink = (id: number, field: "u" | "l", value: string) => {
      setLinks((prev) =>
        prev.map((link) =>
          link.id === id ? { ...link, [field]: value } : link
        )
      );
    };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setLinks((prevLinks) => {
      const oldIndex = prevLinks.findIndex((link) => link.id === active.id);
      const newIndex = prevLinks.findIndex((link) => link.id === over.id);
      return arrayMove(prevLinks, oldIndex, newIndex);
    });
  };

  return (
    <FormSection
      title="Links"
      description="Add some links here">
        <div>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={links.map((link) => link.id)} strategy={verticalListSortingStrategy}>
              {links.map((link) => (
                <SortableItem key={link.id} id={link.id}>
                  <div className="relative mb-6 group bg-white shadow-md p-4 rounded-md">
                    <button
                      onClick={() => removeLink(link.id)}
                      className="absolute top-[-10px] right-[-10px] text-gray-500 hover:text-gray-700 transition duration-300"
                    >
                      <FontAwesomeIcon size="lg" icon={faTimesCircle} />
                    </button>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Label</label>
                        <input
                          type="text"
                          value={link.l}
                          onChange={(e) => updateLink(link.id, "l", e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">URL</label>
                        <input
                          type="text"
                          value={link.u}
                          onChange={(e) => updateLink(link.id, "u", e.target.value)}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    {(!link.l || !link.u) && (
                      <p className="mt-2 text-xs text-center text-gray-400">
                        Link will be shown once a label and URL are added.
                      </p>
                    )}
                  </div>
                </SortableItem>
              ))}
            </SortableContext>
          </DndContext>

          <button
            onClick={appendLink}
            className="mt-8 border-2 text-slate-500 border-slate-300 rounded-lg block w-full py-2 flex items-center justify-center gap-2 hover:text-white hover:bg-slate-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faCirclePlus} className="h-6 w-6" /> Add Link
          </button>
        </div>
        </FormSection>
);
};