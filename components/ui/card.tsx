import * as React from "react"

import { cn } from "@/lib/utils"
import { VariantProps, cva } from 'class-variance-authority'


const cardVariants = cva(
    "rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden [&>.card-image>img]:object-cover",
    {
        variants: {
            variant: {
                primary: "",
                secondary: "bg-secondary text-secondary-foreground",
            },
            orientation: {
                default: "[&>.card-image>img]:w-full",
                horizontal: "flex [&>.card-image>img]:h-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            orientation: "default",
        },
    }
)

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {

}

const Card = React.forwardRef<
    HTMLDivElement,
    CardProps
>(({ className, variant, orientation, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(cardVariants({ variant, orientation, className }))}
        {...props}
    />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardImage = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("card-image w-full relative", className)}
        {...props}
    />
))
CardImage.displayName = "CardImage"

const CardImageContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("absolute", className)}
        {...props}
    />
))
CardImageContent.displayName = "CardImageContent"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage, CardImageContent }
