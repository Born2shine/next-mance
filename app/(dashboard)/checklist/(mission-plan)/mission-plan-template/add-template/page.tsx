"use client";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import Routes from "@/lib/routes/routes";
import { useMissionPlanTemplate } from "../../../_hooks/useMissionPlanTemplate";
import { ChecklistLayout } from "../../../_components/checklist-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CustomDateInput from "@/components/custom-date-input";
import CustomSelect from "@/components/custom-select";
import DashboardModal from "../../../_components/checklist-dashboard-modal";
import CancelModal from "../../../_components/cancel-modal";
import { formatRMDatePicker } from "@/utils/helpers/date-formatter";

const AddMissionPlanTemplate = () => {
  const cancelRoute = Routes.ChecklistRoute.ChecklistOverview();
  const {
    formik,
    units,
    handleProceedCancel,
    openCancelModal,
    handleCancelDialog,
    isCreatingMissionPlanTemplate,
  } = useMissionPlanTemplate({ cancelPath: cancelRoute });

  const headerClass = "text-custom-dark-blue font-normal text-sm mb-8";
  const labelClassName = "block text-xs text-[#6E7C87] font-normal pb-2";

  return (
    <ChecklistLayout
      onCancel={handleCancelDialog}
      title="Mission Plan Template"
      onProceedBtn={formik.handleSubmit}
      showBtn
      step={`Step 1 of 2`}
      btnDisabled={!formik.isValid || !formik.dirty}
      loading={isCreatingMissionPlanTemplate}
    >
      <form
        className="mt-5 max-w-full"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div className="mb-5">
          <div className="flex gap-5 ">
            <Input
              label="Input your template title"
              type="text"
              placeholder="C Level Mission Plan"
              id="template_title"
              name="template_title"
              onChange={formik.handleChange}
              className={`w-[425px]`}
            />

            <Button
              variant="outline"
              className="font-light mt-auto text-primary border-primary hover:bg-transparent hover:text-primary"
            >
              Edit
            </Button>
          </div>

          <div className="flex flex-col gap-5 mex-w-[">
            {/* FINANCIAL YEAR */}
            <div className="mt-5 border rounded-lg p-8 pb-10 pt-10">
              <p className={headerClass}>1. Financial Year</p>
              <div className="mt-2 flex w-[874px] gap-5 justify-between items-center">
                <Input
                  label="Title"
                  type="text"
                  placeholder="2024 Financial Year"
                  id="financial_year.title"
                  name="financial_year.title"
                  onChange={formik.handleChange}
                  className={`w-[425px]`}
                />

                <div className="flex gap-5  items-center ">
                  <CustomDateInput
                    id="financial_year.start_period"
                    label="Start Period"
                    selected={formik.values.financial_year.start_period}
                    handleChange={(date) =>
                      formik.setFieldValue(
                        "financial_year.start_period",
                        formatRMDatePicker(date)
                      )
                    }
                    error={""}
                    className="relative"
                  />
                  <CustomDateInput
                    id="financial_year.end_period"
                    label="Start Period"
                    selected={formik.values.financial_year.end_period}
                    handleChange={(date) =>
                      formik.setFieldValue(
                        "financial_year.end_period",
                        formatRMDatePicker(date)
                      )
                    }
                    error={""}
                    className="relative"
                  />
                </div>
              </div>
            </div>

            {/* MISSION STATEMENT */}
            <div className="mt-5 border rounded-lg p-8 pb-10 pt-10">
              <p className={headerClass}>2. Mission Statement</p>
              <div className="mt-2">
                <div>
                  <label
                    htmlFor="financial_year.title"
                    className="block text-xs text-[#6E7C87] font-normal pb-2"
                  >
                    Set Mission Statement
                  </label>
                  <Textarea
                    label="Set Mission Statement"
                    //   type="text"
                    placeholder="Input Mission Statement"
                    id="financial_year.title"
                    name="financial_year.title"
                    onChange={formik.handleChange}
                    className={`w-[874px] h-[105px] p-0 pt-0 px-3 py-4 text-sm  transition-colors bg-[#F6F8F9] resize-none`}
                  />
                </div>
              </div>
            </div>

            {/* MEASURE OF SUCCESS*/}
            <div className="mt-5 border rounded-lg p-8 pb-10 pt-10">
              <p className={headerClass}>3. Measure of Success</p>
              <div className="mt-2 flex items-center gap-5">
                <Input
                  label="Measure of Success 1"
                  type="text"
                  placeholder="Input Measure of Success"
                  id="measure_of_success.measure_of_success"
                  name="measure_of_success.measure_of_success"
                  onChange={formik.handleChange}
                  className={`w-[425px]`}
                />
                <div className="flex gap-5 items-center">
                  <CustomSelect
                    label="Unit"
                    placeholder="Select unit"
                    options={units}
                    selected={formik.values.measure_of_success.unit}
                    setSelected={(value) =>
                      formik.setFieldValue("measure_of_success.unit", value)
                    }
                    className="w-[152px]"
                    labelClass={labelClassName}
                  />
                  <Input
                    label="Target"
                    type="text"
                    placeholder="Input number"
                    id="measure_of_success.target"
                    name="measure_of_success.target"
                    onChange={formik.handleChange}
                    className={`w-[152x]`}
                  />
                </div>
              </div>
            </div>

            {/* IMPLIED TASK*/}
            <div className="mt-5 border rounded-lg p-8 pb-10 pt-10">
              <p className={headerClass}>4. Implied Task</p>
              <div className="mt-2 flex items-center gap-5">
                <Input
                  label="Implied Task"
                  type="text"
                  placeholder="Implied Task"
                  id="implied_task"
                  name="implied_task"
                  onChange={formik.handleChange}
                  className={`w-[425px]`}
                />
              </div>
            </div>

            {/* SPECIFIED TASK*/}
            <div className="mt-5 border rounded-lg p-8 pb-10 pt-10">
              <p className={headerClass}>5. Specified Task</p>
              <div className="mt-2 flex items-center gap-5">
                <Input
                  label="Specified Task"
                  type="text"
                  placeholder="Input Task"
                  id="specified_task"
                  name="specified_task"
                  onChange={formik.handleChange}
                  className={`w-[425px]`}
                />
              </div>
            </div>

            {/* FREEDOM & CONSTRAINTS*/}
            <div className="mt-5 border rounded-lg p-8 pb-10 pt-10">
              <p className={headerClass}>6. Freedom & Constraints</p>
              <div className="mt-2 flex items-center gap-5">
                <Input
                  label="Constraint 1"
                  type="text"
                  placeholder="Input constraint"
                  id="freedom_and_constraints.constraint"
                  name="freedom_and_constraints.constraint"
                  onChange={formik.handleChange}
                  className={`w-[425px]`}
                />

                <Input
                  label="Freedom 1"
                  type="text"
                  placeholder="Input freedom"
                  id="freedom_and_constraints.freedom"
                  name="freedom_and_constraints.freedom"
                  onChange={formik.handleChange}
                  className={`w-[425px]`}
                />
              </div>
            </div>

            {/* STRATEGIC INTENT */}
            <div className="mt-5 border rounded-lg p-8 pb-10 pt-10">
              <p className={headerClass}>7. Set Strategic Intent</p>
              <div className="mt-2">
                <Input
                  label="Strategic intent 1"
                  type="text"
                  placeholder="Input Intent"
                  id="strategic_intent"
                  name="strategic_intent"
                  onChange={formik.handleChange}
                  className={`w-[425px]`}
                />
              </div>
            </div>

            {/*STRATEGIC PILLARS */}
            <div className="mt-5 border rounded-lg p-8 pb-10 pt-10">
              <p className={headerClass}>8. Set Strategic Pillars</p>
              <div className="mt-2">
                <Input
                  label="Strategic pillar 1"
                  type="text"
                  placeholder="Input pillar"
                  id="strategic_pillar"
                  name="strategic_pillar"
                  onChange={formik.handleChange}
                  className={`w-[425px]`}
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      <DashboardModal
        className={"w-[420px]"}
        open={openCancelModal}
        onOpenChange={handleCancelDialog}
      >
        <CancelModal
          onProceed={handleProceedCancel}
          modalTitle="Mission Plan Template"
        />
      </DashboardModal>
    </ChecklistLayout>
  );
};
export default AddMissionPlanTemplate;
