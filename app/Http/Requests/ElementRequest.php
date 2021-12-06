<?php

namespace App\Http\Requests;

use App\Models\Element;
use Illuminate\Foundation\Http\FormRequest;

class ElementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'turbine_id' => 'required',
            'element_number' => 'required'
        ];
    }

    /**
     * @param Element $element
     * @return Element
     */
    public function persist(Element $element)
    {
        $element->turbine_id = $this->turbine_id;
        $element->element_number = $this->element_number;
        $element->element_name = $this->element_name;

        $element->save();

        return $element;
    }
}


