"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useI18n } from "@/hooks/use-i18n"

interface DatePickerProps {
    name: string;
}

export function DatePicker({ name }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>()
  const { t } = useI18n();
  
  // Hidden input to store date for form submission
  const hiddenInput = date ? <input type="hidden" name={name} value={format(date, 'yyyy-MM-dd')} /> : null;

  return (
    <>
      {hiddenInput}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{t('datepicker.placeholder')}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  )
}
