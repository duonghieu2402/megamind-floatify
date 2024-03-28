import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  DatePicker,
  Icon,
  OptionList,
  Popover,
  TextField,
  useBreakpoints,
} from "@shopify/polaris";
import { ArrowRightMinor, CalendarMinor } from "@shopify/polaris-icons";
import { memo, useCallback, useEffect, useState } from "react";
import { DATE_RANGE } from "./types/constant";
import { formatDateString } from "~/share/functions";
import { DatePickerStyled } from "./styled";

function CustomDatePicker({
  onSave,
  start,
  end,
  titleBtn,
  setTitleBtn,
  variant,
}: {
  onSave?: Function;
  start: Date;
  end: Date;
  titleBtn: string;
  setTitleBtn: Function;
  variant?: ButtonProps["variant"];
}) {
  const now = new Date();
  const { mdDown } = useBreakpoints();
  const [selected, setSelected] = useState(DATE_RANGE[3]);
  const [popoverActive, setPopoverActive] = useState(false);
  const [selectedDates, setSelectedDates] = useState({ start, end });
  const [{ month, year }, setDate] = useState({ month: now.getMonth(), year: now.getFullYear() });
  const handleMonthChange = useCallback((month: number, year: number) => setDate({ month, year }), []);

  useEffect(() => {
    const range = DATE_RANGE.find((item) => item.title === titleBtn);
    setSelected(range || DATE_RANGE[3]);
  }, [titleBtn]);

  return (
    <Popover
      active={popoverActive}
      autofocusTarget="none"
      preferredAlignment="left"
      preferredPosition="below"
      fluidContent
      sectioned={false}
      fullHeight
      activator={
        <Button variant={variant} icon={CalendarMinor} onClick={() => setPopoverActive(!popoverActive)}>
          {titleBtn}
        </Button>
      }
      onClose={() => {
        setSelectedDates({ start, end });
        setPopoverActive(false);
      }}
    >
      <DatePickerStyled>
        <div className="d-flex date-picker-options" style={{ fontSize: ".75rem" }}>
          <OptionList
            options={DATE_RANGE.map((range) => ({
              value: range.alias,
              label: range.title,
            }))}
            selected={[selected.alias]}
            onChange={(value) => {
              const range = DATE_RANGE.find((range) => range.alias === value[0]) || DATE_RANGE[0];
              setSelected(range);
              setSelectedDates({ ...range.period });
              handleMonthChange(range.period.start.getMonth(), range.period.start.getFullYear());
            }}
          />
          <Box padding={{ xs: "400" }} maxWidth={mdDown ? "320px" : "516px"}>
            <div className="d-flex">
              <div>
                <TextField
                  role="combobox"
                  label={"Since"}
                  labelHidden
                  prefix={<Icon source={CalendarMinor} />}
                  value={formatDateString(selectedDates.start, "dd mn yyyy")}
                  readOnly
                  autoComplete="off"
                />
              </div>
              <Icon source={ArrowRightMinor} />
              <div>
                <TextField
                  role="combobox"
                  label={"Until"}
                  labelHidden
                  prefix={<Icon source={CalendarMinor} />}
                  value={formatDateString(selectedDates.end, "dd mn yyyy")}
                  autoComplete="off"
                  readOnly
                />
              </div>
            </div>
            <DatePicker
              month={month}
              year={year}
              selected={{
                start: selectedDates.start,
                end: selectedDates.end,
              }}
              onMonthChange={handleMonthChange}
              onChange={(value) => {
                setSelectedDates(value);
                setSelected(DATE_RANGE[0]);
              }}
              multiMonth
              allowRange
              disableDatesAfter={now}
            />
            <div className="date-picker-btn-group">
              <ButtonGroup>
                <Button
                  onClick={() => {
                    setPopoverActive(false);
                    setSelectedDates({ start, end });
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setPopoverActive(false);
                    onSave && onSave(selectedDates.start, selectedDates.end);
                    setTitleBtn(
                      selected.title === "Custom"
                        ? `${formatDateString(selectedDates.start, "dd mn yyyy")} - ${formatDateString(
                            selectedDates.end,
                            "dd mn yyyy"
                          )}`
                        : selected.title
                    );
                  }}
                >
                  Apply
                </Button>
              </ButtonGroup>
            </div>
          </Box>
        </div>
      </DatePickerStyled>
    </Popover>
  );
}
export default memo(CustomDatePicker);
