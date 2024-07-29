"use client";

import Routes from "@/lib/routes/routes";
import { ChecklistLayout } from "../../../_components/checklist-layout";
import FormLayout from "../../../_components/form-layout";
import { Input } from "@/components/ui/input";
import DashboardModal from "../../../_components/checklist-dashboard-modal";
import CancelModal from "../../../_components/cancel-modal";
import CustomSelect from "@/components/custom-select";
import { useDepartment } from "../../../_hooks/useDepartment";

const AddDepartment = () => {
  const cancelRoute = Routes.ChecklistRoute.ChecklistOverview();
  const labelClassName = "block text-xs text-[#6E7C87] font-normal pb-2";
  const {
    formik,
    states,
    subsidiaries,
    handleProceedCancel,
    openCancelModal,
    handleCancelDialog,
    isCreatingDepartment,
    isLoadingSubsidiaries,
    branches,
    headOfDepartment,
  } = useDepartment({ cancelPath: cancelRoute });

  return (
    <ChecklistLayout
      onCancel={handleCancelDialog}
      title="Department"
      onProceedBtn={formik.handleSubmit}
      showBtn
      step={`Step 3 of 4`}
      btnDisabled={!formik.isValid || !formik.dirty}
      loading={isCreatingDepartment}
    >
      <FormLayout
        addText="Add departments to your organization account, by setting them up here."
        module="Department"
        form={
          <form
            className="grid grid-cols-2 gap-x-10 gap-y-5 translate-y-3 "
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <Input
              label="Name of Department"
              type="text"
              placeholder="Name of Department"
              id="name"
              name="name"
              onChange={formik.handleChange}
              isRequired
            />

            <CustomSelect
              label="State"
              isRequired
              placeholder="Branch state"
              options={states}
              selected={formik.values.state}
              setSelected={(value) => formik.setFieldValue("state", value)}
              labelClass={labelClassName}
            />

            <CustomSelect
              label="Head of Department"
              isRequired
              placeholder="Head of Department"
              options={headOfDepartment}
              selected={formik.values.head_of_department}
              setSelected={(value) =>
                formik.setFieldValue("head_of_department", value)
              }
              labelClass={labelClassName}
            />

            <Input
              label="Work Email"
              type="text"
              placeholder="Work Email"
              id="work_email"
              name="work_email"
              onChange={formik.handleChange}
              isRequired
            />

            <CustomSelect
              label="Subsidiary"
              isRequired
              placeholder="Select subsidiary"
              options={subsidiaries}
              selected={formik.values.subsidiary}
              setSelected={(value) => formik.setFieldValue("subsidiary", value)}
              labelClass={labelClassName}
            />

            <CustomSelect
              label="Branch"
              isRequired
              placeholder="Select Branch"
              options={branches}
              selected={formik.values.branch}
              setSelected={(value) => formik.setFieldValue("branch", value)}
              labelClass={labelClassName}
            />
          </form>
        }
      />

      <DashboardModal
        className={"w-[420px]"}
        open={openCancelModal}
        onOpenChange={handleCancelDialog}
      >
        <CancelModal onProceed={handleProceedCancel} modalTitle="Subsidiary" />
      </DashboardModal>
    </ChecklistLayout>
  );
};

export default AddDepartment;
