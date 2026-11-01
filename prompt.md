You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
p-table-4.tsx
"use client";

import {
  type ColumnDef,
  columnSizingFeature,
  columnVisibilityFeature,
  createPaginatedRowModel,
  createSortedRowModel,
  flexRender,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon, PlaneTakeoffIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/p-table-4-utils/badge";
import { Button } from "@/components/ui/p-table-4-utils/button";
import { Checkbox } from "@/components/ui/p-table-4-utils/checkbox";
import { Frame, FrameFooter } from "@/components/ui/p-table-4-utils/frame";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/p-table-4-utils/pagination";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/p-table-4-utils/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/p-table-4-utils/table";

type Flight = {
  id: string;
  flightCode: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  terminal: string;
  duration: string;
  status: "On Time" | "Delayed" | "Cancelled" | "Boarding";
  gate: string;
};

const getStatusColor = (status: Flight["status"]) => {
  switch (status) {
    case "On Time":
      return "bg-emerald-500";
    case "Delayed":
      return "bg-amber-500";
    case "Cancelled":
      return "bg-red-500";
    case "Boarding":
      return "bg-blue-500";
    default:
      return "bg-muted-foreground/64";
  }
};

const features = tableFeatures({
  columnSizingFeature,
  columnVisibilityFeature,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
  rowSelectionFeature,
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
  },
});

const columns: ColumnDef<typeof features, Flight>[] = [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    header: ({ table }) => {
      const isAllSelected = table.getIsAllPageRowsSelected();
      const isSomeSelected = table.getIsSomePageRowsSelected();
      return (
        <Checkbox
          aria-label="Select all rows"
          checked={isAllSelected}
          indeterminate={isSomeSelected && !isAllSelected}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        />
      );
    },
    id: "select",
    size: 28,
  },
  {
    accessorKey: "flightCode",
    cell: ({ row }) => (
      <div className="font-medium font-mono text-muted-foreground">
        {row.getValue("flightCode")}
      </div>
    ),
    header: "Flight",
    size: 80,
  },
  {
    accessorKey: "departureTime",
    cell: ({ row }) => {
      const isCancelled = row.original.status === "Cancelled";
      const isDelayed = row.original.status === "Delayed";
      return (
        <div
          className={cn(
            "flex items-center gap-1.5 font-normal tabular-nums",
            isCancelled && "text-muted-foreground line-through opacity-50",
          )}
        >
          <div className={isDelayed ? "text-warning-foreground" : undefined}>
            {row.original.departureTime}
          </div>
          <div
            aria-hidden="true"
            className="flex items-center gap-0.5 opacity-50 before:size-1.5 before:rounded-full before:border before:border-muted-foreground after:h-px after:w-3 after:border-muted-foreground after:border-t after:border-dashed"
          />
          <div
            className={cn(
              "text-muted-foreground",
              isCancelled && "line-through",
            )}
          >
            {row.original.duration}
          </div>
          <div
            aria-hidden="true"
            className="flex items-center gap-0.5 opacity-50 before:order-1 before:size-1.5 before:rounded-full before:border before:border-muted-foreground after:h-px after:w-3 after:border-muted-foreground after:border-t after:border-dashed"
          />
          <div>{row.original.arrivalTime}</div>
        </div>
      );
    },
    header: "Time",
    size: 220,
  },
  {
    accessorKey: "destination",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("destination")}</div>
    ),
    header: "Destination",
    size: 180,
  },
  {
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Flight["status"];
      return (
        <Badge variant="outline">
          <span
            aria-hidden="true"
            className={cn("size-1.5 rounded-full", getStatusColor(status))}
          />
          {status}
        </Badge>
      );
    },
    header: "Status",
    size: 120,
  },
  {
    accessorKey: "terminal",
    cell: ({ row }) => (
      <Badge className="font-normal tabular-nums" size="lg" variant="outline">
        <PlaneTakeoffIcon />
        <span>{row.getValue("terminal")}</span>
      </Badge>
    ),
    header: "Terminal",
    size: 90,
  },
  {
    accessorKey: "gate",
    header: "Gate",
    size: 80,
  },
];

export default function Particle() {
  const pageSize = 10;

  const table = useTable(
    {
      columns,
      data: flights,
      enableSortingRemoval: false,
      features,
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize,
        },
        sorting: [
          {
            desc: false,
            id: "departureTime",
          },
        ],
      },
    },
    (state) => ({
      pagination: state.pagination,
      rowSelection: state.rowSelection,
      sorting: state.sorting,
    }),
  );

  return (
    <Frame className="w-full">
      <Table variant="card" className="table-fixed">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="hover:bg-transparent" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const columnSize = header.column.getSize();
                return (
                  <TableHead
                    key={header.id}
                    style={
                      columnSize ? { width: `${columnSize}px` } : undefined
                    }
                  >
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <div
                        className="flex h-full cursor-pointer select-none items-center justify-between gap-2"
                        onClick={header.column.getToggleSortingHandler()}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            header.column.getToggleSortingHandler()?.(e);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: (
                            <ChevronUpIcon
                              aria-hidden="true"
                              className="size-4 shrink-0 opacity-80"
                            />
                          ),
                          desc: (
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="size-4 shrink-0 opacity-80"
                            />
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() ? "selected" : undefined}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <FrameFooter className="p-2">
        <div className="flex items-center justify-between gap-2">
          {/* Results range selector */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className="text-muted-foreground text-sm">Viewing</p>
            <Select
              items={Array.from({ length: table.getPageCount() }, (_, i) => {
                const start = i * table.state.pagination.pageSize + 1;
                const end = Math.min(
                  (i + 1) * table.state.pagination.pageSize,
                  table.getRowCount(),
                );
                const pageNum = i + 1;
                return { label: `${start}-${end}`, value: pageNum };
              })}
              onValueChange={(value) => {
                table.setPageIndex((value as number) - 1);
              }}
              value={table.state.pagination.pageIndex + 1}
            >
              <SelectTrigger
                aria-label="Select result range"
                className="w-fit min-w-none"
                size="sm"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectPopup>
                {Array.from({ length: table.getPageCount() }, (_, i) => {
                  const start = i * table.state.pagination.pageSize + 1;
                  const end = Math.min(
                    (i + 1) * table.state.pagination.pageSize,
                    table.getRowCount(),
                  );
                  const pageNum = i + 1;
                  return (
                    <SelectItem key={pageNum} value={pageNum}>
                      {`${start}-${end}`}
                    </SelectItem>
                  );
                })}
              </SelectPopup>
            </Select>
            <p className="text-muted-foreground text-sm">
              of{" "}
              <strong className="font-medium text-foreground">
                {table.getRowCount()}
              </strong>{" "}
              results
            </p>
          </div>

          {/* Pagination */}
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="sm:*:[svg]:hidden"
                  render={
                    <Button
                      disabled={!table.getCanPreviousPage()}
                      onClick={() => table.previousPage()}
                      size="sm"
                      variant="outline"
                    />
                  }
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className="sm:*:[svg]:hidden"
                  render={
                    <Button
                      disabled={!table.getCanNextPage()}
                      onClick={() => table.nextPage()}
                      size="sm"
                      variant="outline"
                    />
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </FrameFooter>
    </Frame>
  );
}

const flights: Flight[] = [
  {
    arrivalTime: "11:45",
    departureTime: "08:30",
    destination: "Los Angeles",
    duration: "5h 15m",
    flightCode: "AA1234",
    gate: "A12",
    id: "1",
    status: "On Time",
    terminal: "1",
  },
  {
    arrivalTime: "17:10",
    departureTime: "14:20",
    destination: "San Francisco",
    duration: "4h 50m",
    flightCode: "DL5678",
    gate: "B24",
    id: "2",
    status: "Delayed",
    terminal: "2",
  },
  {
    arrivalTime: "13:30",
    departureTime: "10:15",
    destination: "Miami",
    duration: "3h 15m",
    flightCode: "UA9012",
    gate: "C8",
    id: "3",
    status: "On Time",
    terminal: "1",
  },
  {
    arrivalTime: "18:20",
    departureTime: "16:45",
    destination: "Seattle",
    duration: "2h 35m",
    flightCode: "SW3456",
    gate: "D15",
    id: "4",
    status: "On Time",
    terminal: "3",
  },
  {
    arrivalTime: "12:30",
    departureTime: "09:00",
    destination: "Salt Lake City",
    duration: "5h 30m",
    flightCode: "JB7890",
    gate: "E3",
    id: "5",
    status: "Cancelled",
    terminal: "2",
  },
  {
    arrivalTime: "14:15",
    departureTime: "11:30",
    destination: "Phoenix",
    duration: "2h 45m",
    flightCode: "AS2345",
    gate: "F7",
    id: "6",
    status: "On Time",
    terminal: "1",
  },
  {
    arrivalTime: "20:30",
    departureTime: "13:00",
    destination: "Las Vegas",
    duration: "5h 30m",
    flightCode: "HA6789",
    gate: "G12",
    id: "7",
    status: "Delayed",
    terminal: "2",
  },
  {
    arrivalTime: "09:00",
    departureTime: "07:15",
    destination: "Dallas",
    duration: "1h 45m",
    flightCode: "FX0123",
    gate: "H5",
    id: "8",
    status: "Boarding",
    terminal: "1",
  },
  {
    arrivalTime: "08:30",
    departureTime: "06:00",
    destination: "Denver",
    duration: "2h 30m",
    flightCode: "WN4567",
    gate: "I9",
    id: "9",
    status: "Boarding",
    terminal: "2",
  },
  {
    arrivalTime: "15:20",
    departureTime: "12:45",
    destination: "Portland",
    duration: "2h 35m",
    flightCode: "B61234",
    gate: "J14",
    id: "10",
    status: "On Time",
    terminal: "3",
  },
  {
    arrivalTime: "18:45",
    departureTime: "15:30",
    destination: "Atlanta",
    duration: "3h 15m",
    flightCode: "NK8901",
    gate: "K6",
    id: "11",
    status: "On Time",
    terminal: "1",
  },
  {
    arrivalTime: "12:00",
    departureTime: "09:45",
    destination: "Chicago",
    duration: "2h 15m",
    flightCode: "F92345",
    gate: "L11",
    id: "12",
    status: "Delayed",
    terminal: "2",
  },
  {
    arrivalTime: "14:15",
    departureTime: "11:00",
    destination: "Boston",
    duration: "3h 15m",
    flightCode: "SY6789",
    gate: "M3",
    id: "13",
    status: "On Time",
    terminal: "1",
  },
  {
    arrivalTime: "16:45",
    departureTime: "13:30",
    destination: "New York",
    duration: "3h 15m",
    flightCode: "G40123",
    gate: "N8",
    id: "14",
    status: "On Time",
    terminal: "3",
  },
  {
    arrivalTime: "11:20",
    departureTime: "08:00",
    destination: "Washington",
    duration: "3h 20m",
    flightCode: "YX5678",
    gate: "O12",
    id: "15",
    status: "Delayed",
    terminal: "2",
  },
  {
    arrivalTime: "13:50",
    departureTime: "10:30",
    destination: "Orlando",
    duration: "3h 20m",
    flightCode: "4U9012",
    gate: "P5",
    id: "16",
    status: "Delayed",
    terminal: "1",
  },
  {
    arrivalTime: "16:30",
    departureTime: "14:00",
    destination: "Houston",
    duration: "2h 30m",
    flightCode: "QF3456",
    gate: "Q9",
    id: "17",
    status: "On Time",
    terminal: "3",
  },
  {
    arrivalTime: "10:00",
    departureTime: "07:30",
    destination: "Minneapolis",
    duration: "2h 30m",
    flightCode: "LH7890",
    gate: "R7",
    id: "18",
    status: "Cancelled",
    terminal: "2",
  },
  {
    arrivalTime: "19:30",
    departureTime: "16:15",
    destination: "Detroit",
    duration: "3h 15m",
    flightCode: "KL2345",
    gate: "S4",
    id: "19",
    status: "Cancelled",
    terminal: "1",
  },
  {
    arrivalTime: "15:10",
    departureTime: "12:00",
    destination: "Philadelphia",
    duration: "3h 10m",
    flightCode: "AF6789",
    gate: "T16",
    id: "20",
    status: "On Time",
    terminal: "3",
  },
  {
    arrivalTime: "12:25",
    departureTime: "09:15",
    destination: "Charlotte",
    duration: "3h 10m",
    flightCode: "BA0123",
    gate: "U10",
    id: "21",
    status: "On Time",
    terminal: "2",
  },
  {
    arrivalTime: "18:00",
    departureTime: "15:45",
    destination: "Nashville",
    duration: "2h 15m",
    flightCode: "IB4567",
    gate: "V8",
    id: "22",
    status: "Delayed",
    terminal: "1",
  },
  {
    arrivalTime: "14:00",
    departureTime: "11:45",
    destination: "Austin",
    duration: "2h 15m",
    flightCode: "EK8901",
    gate: "W13",
    id: "23",
    status: "Cancelled",
    terminal: "3",
  },
  {
    arrivalTime: "16:40",
    departureTime: "13:15",
    destination: "Tampa",
    duration: "3h 25m",
    flightCode: "QR2345",
    gate: "X6",
    id: "24",
    status: "On Time",
    terminal: "2",
  },
  {
    arrivalTime: "11:30",
    departureTime: "08:45",
    destination: "Raleigh",
    duration: "2h 45m",
    flightCode: "TK6789",
    gate: "Y11",
    id: "25",
    status: "On Time",
    terminal: "1",
  },
  {
    arrivalTime: "12:45",
    departureTime: "10:00",
    destination: "Indianapolis",
    duration: "2h 45m",
    flightCode: "VS3456",
    gate: "Z4",
    id: "26",
    status: "On Time",
    terminal: "2",
  },
  {
    arrivalTime: "20:00",
    departureTime: "17:30",
    destination: "Kansas City",
    duration: "2h 30m",
    flightCode: "LX7890",
    gate: "A8",
    id: "27",
    status: "Delayed",
    terminal: "3",
  },
  {
    arrivalTime: "15:20",
    departureTime: "12:30",
    destination: "Columbus",
    duration: "2h 50m",
    flightCode: "OS1234",
    gate: "B19",
    id: "28",
    status: "On Time",
    terminal: "1",
  },
  {
    arrivalTime: "20:15",
    departureTime: "18:00",
    destination: "Milwaukee",
    duration: "2h 15m",
    flightCode: "SN5678",
    gate: "C22",
    id: "29",
    status: "On Time",
    terminal: "2",
  },
  {
    arrivalTime: "21:30",
    departureTime: "19:15",
    destination: "Memphis",
    duration: "2h 15m",
    flightCode: "TP9012",
    gate: "D6",
    id: "30",
    status: "On Time",
    terminal: "3",
  },
];


demo.tsx
import FlightDataTable from "@/components/ui/p-table-4";

export default function Demo() {
  return (
    <div className="w-full max-w-4xl p-4">
      <FlightDataTable />
    </div>
  );
}

```

Copy-paste these files for dependencies:
```tsx
shadcn/badge
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```
```tsx
shadcn/checkbox
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

```
```tsx
shadcn/pagination
import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

```
```tsx
shadcn/select
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```
```tsx
shadcn/table
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className,
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

Install NPM dependencies:
```bash
lucide-react, @tanstack/react-table, class-variance-authority, @radix-ui/react-slot, @radix-ui/react-checkbox, @radix-ui/react-select
```

Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):
```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  --color-destructive-foreground: var(--destructive-foreground);
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}

:root {
  --destructive-foreground: var(--color-red-700);
  --info: var(--color-blue-500);
  --info-foreground: var(--color-blue-700);
  --success: var(--color-emerald-500);
  --success-foreground: var(--color-emerald-700);
  --warning: var(--color-amber-500);
  --warning-foreground: var(--color-amber-700);
}

.dark {
  --destructive-foreground: var(--color-red-400);
  --info: var(--color-blue-500);
  --info-foreground: var(--color-blue-400);
  --success: var(--color-emerald-500);
  --success-foreground: var(--color-emerald-400);
  --warning: var(--color-amber-500);
  --warning-foreground: var(--color-amber-400);
}

```
