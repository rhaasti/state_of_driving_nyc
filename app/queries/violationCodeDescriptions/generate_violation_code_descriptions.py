# from pypdf import PdfReader
# import json 


# reader = PdfReader("/users/ryan/downloads/508_nypd_violation_code_listing.pdf")

# violation_code_summary = {}

# for page in reader.pages:
#     extracted_text = page.extract_text()
#     extracted_text_list = extracted_text.split('\n')

#     for row in extracted_text_list:
#         split_array = row.split(' ')
#         violation_string = ''

#         if '\xa0' not in split_array and '\xa0\xa0' not in split_array:
#             for index, element in enumerate(split_array):
#                 if index >= 3 and element is not '' and element is not 'N' and element is not 'Y':
#                     violation_string = violation_string + ' ' + element
#             violation_code_summary[split_array[1]] = violation_string.replace('\xa0','').replace('‐TBTA','').replace('‐NYC','').replace('‐ NYC','').replace('\u2010', '-').strip(' ')
           

# f = open("/users/ryan/downloads/violation_code_summary.txt", "w")

# with open("/users/ryan/downloads/violation_code_summary.txt", "w") as convert_file:
#     convert_file.write(json.dumps(violation_code_summary))

# f.close()
