[
    {
        "WfName": "SupplementaryBudgetRequest",
        "AcessPermission": "Private", 
        "AuthGroups": ["Berger Portal Owners"],
        "AuthUsersADId": [208, 296, 350, 21],
        "AuthUsersEmpId": [1270, 334],  
        "DisplayTxt": "Supplementary Budget Request",
        "ViewUrl": { "siteUrl": "leaveauto/SitePages/SupplementaryBudgetRequest.aspx?UniqueId=", "qryStrKeyTyp": "ID", "mode": "&mode=read", "titleTag": "SBR-" },
        "MasterListInfo": { "name": "SupplementaryBudgetRequest", "select": "GUID,ID,Title,BudgetExpansionType,IONumber,Justification,TypeOfBudget,TotalCost,RequestFor,RequestForPlant,PendingWith/ID,PendingWith/Title,Author/ID,Created,Status,Author/Title,Author/Office,Author/JobTitle&$expand=PendingWith/ID,Author/ID&$orderby=Created desc", "primaryKey": "Title"},
        "RenderDetListInfo": [{ "name": "SupBudgetRequestAuditLog", "select": "ID,Title,Status,Comment,Author/Title,Author/Office,Author/Title,Author/Office,Author/JobTitle&$expand=Author/ID"}],
        "DetailsListInfo": [{ "name": "SupBudgetRequestDetails", "select": "ID,Title,MaterialCode,MaterialName,AccountOrGLCode,CostCentre,IONo,Quantity,UnitPrice,TotalPrice,Author/Title,Author/Office,Author/JobTitle,Author/Title,Author/Office,Author/JobTitle&$expand=Author/ID&$orderby=Created desc", "primaryKey": "Title"}],
        "DbViewColDef": [
            { "fldType": "ViewLinkGuidField", "headerName": "View", "field": "GUID", "editable":false, "minWidth": 80 },
            { "fldType": "TitleWitouthMDField", "headerName": "RequestID", "field": "Title", "editable":false, "minWidth": 120 },
            { "fldType": "GetSetDateField", "headerName": "Created", "field": "Created", "valueGetter":"Created", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Requested by", "field": "Author.Title", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Office", "field": "Author.Office", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Justification", "field": "Justification", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Pending With", "field": "PendingWith.Title", "editable":false, "minWidth": 140 },
            { "fldType": "TextField", "headerName": "Status", "field": "Status", "editable":true, "minWidth": 165 }, 
            { "fldType": "TextField", "headerName": "JobTitle", "field": "Author.JobTitle", "editable":false, "minWidth": 165 }
        ],
        "MasterDetailViewColDef": [
            { "fldType": "ViewLinkGuidField", "headerName": "View", "field": "GUID", "editable":false, "minWidth": 80 },
            { "fldType": "TitleWitouthMDField", "headerName": "RequestID", "field": "Title", "editable":false, "minWidth": 120 },
            { "fldType": "GetSetDateField", "headerName": "Created", "field": "Created", "valueGetter":"Created", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Requested by", "field": "Author.Title", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Office", "field": "Author.Office", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Justification", "field": "Justification", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Pending With", "field": "PendingWith.Title", "editable":false, "minWidth": 140 },
            { "fldType": "TextField", "headerName": "Status", "field": "Status", "editable":true, "minWidth": 165 }, 
            { "fldType": "TextField", "headerName": "JobTitle", "field": "Author.JobTitle", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "MaterialCode", "field": "MaterialCode", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "MaterialName", "field": "MaterialName", "editable":false, "minWidth": 160 }                                                
        ],
        "ReportViewColDef": [
            { "fldType": "ViewLinkGuidField", "headerName": "View", "field": "GUID", "editable":false, "minWidth": 80 },
            { "fldType": "TitleWitouthMDField", "headerName": "RequestID", "field": "Title", "editable":false, "minWidth": 120 },
            { "fldType": "GetSetDateField", "headerName": "Created", "field": "Created", "valueGetter":"Created", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Requested by", "field": "Author.Title", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Office", "field": "Author.Office", "editable":false, "minWidth": 165 },            
            { "fldType": "TextField", "headerName": "Pending With", "field": "PendingWith.Title", "editable":false, "minWidth": 140 },
            { "fldType": "TextField", "headerName": "Status", "field": "Status", "editable":true, "minWidth": 165 }, 
            { "fldType": "TextField", "headerName": "JobTitle", "field": "Author.JobTitle", "editable":false, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "MaterialCode", "field": "MaterialCode", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "MaterialName", "field": "MaterialName", "editable":false, "minWidth": 160 },            
            { "fldType": "TextField", "headerName": "AccountOrGLCode", "field": "AccountOrGLCode", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "CostCentre", "field": "CostCentre", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "IONo", "field": "IONo", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "Quantity", "field": "Quantity", "editable":false, "minWidth": 160 },            
            { "fldType": "TextField", "headerName": "UnitPrice", "field": "UnitPrice", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "TotalPrice", "field": "TotalPrice", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "Justification", "field": "Justification", "editable":true, "minWidth": 500 },
            { "fldType": "TextField", "headerName": "GMFPM Comments", "field": "GMFPMToCFO.Comment", "editable":false, "minWidth": 400 }                                                                                                                                                                                              
        ]
    }
]
