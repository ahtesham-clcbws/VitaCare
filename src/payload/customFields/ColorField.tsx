'use client'
import { useField } from '@payloadcms/ui'

const ColorField: React.FC = () => {
    const { value, setValue } = useField<any>({})

    return (
        <div className="field-type text" style={{ flex: 1 }}>
            <label className="field-label">Color<span className="required">*</span></label>
            <div className="field-type__wrap">
                <input type='color' onChange={(e) => setValue(e.target.value)}
                    value={value} />
            </div>
        </div>
    )
}
export default ColorField;
