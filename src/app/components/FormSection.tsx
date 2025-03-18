import React from "react"

type Props = {
    title: string,
    description: string,
    children?: React.ReactNode,
}

export const FormSection: React.FC<Props> = ({
    title,
    description,
    children
}) => {
return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
        <div className="px-4 sm:px-0 sticky top-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
            {title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
            {description}
            </p>
        </div>
        </div>
        {children && (
            <div className="mt-5 md:col-span-2 md:mt-0 relative">
                {children}
            </div>
        )}
    </div>
)}