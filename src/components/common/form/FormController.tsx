import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { ElementType } from 'react';

type Props<FormType extends FieldValues, FieldProps> = {
  name: Path<FormType>;
  control: Control<FormType>;
  Field: ElementType;
  fieldProps?: FieldProps;
};

function FormController<FormType extends FieldValues, FieldProps>({
  name,
  control,
  fieldProps,
  Field,
}: Props<FormType, FieldProps>) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          return <Field {...field} {...fieldProps} id={field.name} error={fieldState.error} />;
        }}
      />
    </div>
  );
}

export default FormController;
